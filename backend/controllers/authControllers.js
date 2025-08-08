import User from "../models/User.js";
import twilio from "twilio";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
dotenv.config();

const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);


export const login = async (req, res) => {
    try {
        const { mobile, otp } = req.body;

        if (!mobile || !otp) {
            return res.status(400).json({
                success: false,
                message: "Mobile number and OTP are required.",
            });
        }

        // Verify OTP using Twilio
        const result = await twilioClient.verify.v2
            .services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({ to: mobile, code: otp });

        if (result.status !== "approved") {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired OTP.",
            });
        }

        // Find or create user
        let user = await User.findOne({ mobile });

        if (!user) {
            user = await User.create({ mobile });
        }

        user.lastLogin = new Date();
        await user.save();

        // Generate JWT Token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        // Set token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // only sent over HTTPS
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });


        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                mobile: user.mobile,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error. Please try again.",
        });
    }
};




export const sendOtp = async (req, res) => {
    try {
        const { mobile, method = "sms" } = req.body;

        console.log("Received mobile =>", mobile);

        // Validate input
        if (!mobile) {
            return res.status(400).json({
                success: false,
                message: "Mobile number is required.",
            });
        }

        if (!/^\+?[1-9]\d{7,14}$/.test(mobile)) {
            return res.status(400).json({
                success: false,
                message: "Invalid mobile number format.",
            });
        }

        // Send OTP using Twilio Verify
        await twilioClient.verify.v2
            .services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({ to: `${mobile}`, channel: `${method}` });
        res.status(200).json({ success: true });

    } catch (error) {
        console.log("some error", error);
        console.error("Error sending OTP:", error.message);
        res.status(500).json({
            success: false,
            message: "Failed to send OTP. Please try again.",
        });
    }
}


