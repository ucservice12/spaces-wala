import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
// import { registerUser } from "@/machine/auth";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const Naviagte = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await registerUser(formData, setError, Naviagte);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center my-10 sm:my-4 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-lg w-full shadow-md">
        <div className="text-center mb-8 grid gap-2">
          <h1 className="text-xl font-bold">Create an account</h1>
          <div className="text-sm">
            Already have an account?
            <Link
              to="/login"
              className="underline text-blue-700 underline-offset-4 ml-2"
            >
              login
            </Link>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <span className="text-xs sm:text-sm text-red-700">{error}</span>
          )}

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-xs sm:text-sm">
              I agree to the{" "}
              <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </form>

        <div className="mt-6">
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:border-t after:border-border">
            <span className="relative z-10 bg-white px-2 text-muted-foreground">
              Or sign up with
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            <Button variant="outline" className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
              >
                <path
                  d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                  fill="currentColor"
                />
              </svg>
              Continue with Apple
            </Button>

            <Button variant="outline" className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 mr-2"
              >
                <path
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  fill="currentColor"
                />
              </svg>
              Continue with Google
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignupPage;
