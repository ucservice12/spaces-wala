import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { sendOtp, verifyOtp } from "../machine/auth";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearError } from "../redux/slice/authSlice";
import { motion } from "framer-motion";

// Bubble generator (simple animated floating effect)
const BubblesBackground = () => {
  const bubbles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-60px] bg-white/20 rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
          }}
          animate={{
            y: -800,
            opacity: [0.4, 0.8, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const LoginPage = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fullMobile = `+91${mobile}`;
  const { loading, otpSent, isAuthenticated, user } = useSelector((state) => state.auth);
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    dispatch(clearError());
    setError("");
  }, [step, dispatch]);

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, user, from, navigate]);

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!mobile || !/^\d{10}$/.test(mobile)) {
      return setError("Please enter a valid 10-digit mobile number.");
    }

    try {
      await dispatch(sendOtp(fullMobile)).unwrap();
      setStep(2);
      setResendTimer(60);
    } catch (err) {
      setError(err || "Failed to send OTP.");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!otp || otp.length !== 6) {
      return setError("Enter the 6-digit OTP sent to your mobile.");
    }

    try {
      await dispatch(verifyOtp({ mobile: fullMobile, otp })).unwrap();
    } catch (err) {
      setError(err || "Invalid OTP or login failed.");
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;

    try {
      await dispatch(sendOtp(fullMobile)).unwrap();
      setResendTimer(60);
    } catch (err) {
      setError("Failed to resend OTP.");
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 bg-[#b6cade]">
      <BubblesBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg bg-white shadow-lg rounded-3xl p-6 sm:p-10"
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Login to <span className="text-blue-600">SpacesWala</span>
        </motion.h2>

        <form
          onSubmit={step === 1 ? handleMobileSubmit : handleOtpSubmit}
          className="space-y-5"
        >
          {step === 1 ? (
            <>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Label htmlFor="mobile" className="text-gray-700">
                  Mobile Number
                </Label>
                <div className="flex items-center rounded-md overflow-hidden border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-blue-500">
                  <span className="px-3 py-2 bg-gray-100 text-gray-600 text-sm">+91</span>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d{0,10}$/.test(val)) setMobile(val);
                    }}
                    placeholder="Enter 10-digit mobile"
                    className="rounded-none border-0 focus:ring-0"
                  />
                </div>
              </motion.div>

              <Button
                type="submit"
                className="w-full text-base font-semibold tracking-wide"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </>
          ) : (
            <>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Label htmlFor="otp" className="text-gray-700">
                  Enter OTP
                </Label>
                <Input
                  id="otp"
                  name="otp"
                  type="text"
                  maxLength={6}
                  inputMode="numeric"
                  value={otp}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,6}$/.test(val)) setOtp(val);
                  }}
                  placeholder="6-digit OTP"
                  className="border border-gray-300"
                />
              </motion.div>

              <Button
                type="submit"
                className="w-full text-base font-semibold tracking-wide"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify & Login"}
              </Button>

              <div className="text-sm text-center mt-3 text-gray-600">
                Didn’t get the code?{" "}
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0}
                  className={`font-medium ${resendTimer > 0
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:underline"
                    }`}
                >
                  Resend OTP {resendTimer > 0 ? `(${resendTimer}s)` : ""}
                </button>
              </div>
            </>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-600 text-sm text-center mt-1"
            >
              {error}
            </motion.div>
          )}
        </form>

        <motion.div
          className="mt-6 text-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Don’t have an account?{" "}
          <span className="text-blue-600 font-medium">Just enter your mobile</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
