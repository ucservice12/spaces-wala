import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { sendOtp, verifyOtp } from "../machine/auth";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { clearError } from "../redux/slice/authSlice";
import { motion } from "framer-motion";

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
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#f5f5f5' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row"
      >
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
            alt="Login Illustration"
            className="w-full h-auto object-contain"
            style={{ maxHeight: '500px' }}
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Login to SpacesWala</h1>
          </motion.div>

          <form
            onSubmit={step === 1 ? handleMobileSubmit : handleOtpSubmit}
            className="space-y-6"
          >
            {step === 1 ? (
              <>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                    Mobile Number
                  </Label>
                  <div className="flex items-center rounded-lg overflow-hidden border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-blue-500">
                    <span className="px-4 py-3 bg-gray-100 text-gray-600">+91</span>
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
                      className="rounded-none border-0 focus:ring-0 py-3 text-base"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">*Enter 10-digit mobile number</p>
                </motion.div>

                <Button
                  type="submit"
                  className="w-full py-3 text-base font-semibold tracking-wide"
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
                  <Label htmlFor="otp" className="block text-sm font-medium text-gray-700">
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
                    className="py-3 text-base border border-gray-300 rounded-lg"
                  />
                </motion.div>

                <Button
                  type="submit"
                  className="w-full py-3 text-base font-semibold tracking-wide"
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify & Login"}
                </Button>

                <div className="text-sm text-center mt-3 text-gray-600">
                  Didn't get the code?{" "}
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
            className="mt-8 text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Don't have an account?{" "}
            <span className="text-blue-600 font-medium">Just enter your mobile</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;