import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "user",
    },
    email: {
        type: String,
        unique: true,
        sparse: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    lastLogin: {
        type: Date,
    },
}, {
    timestamps: true,
});

export default mongoose.model("User", userSchema);
