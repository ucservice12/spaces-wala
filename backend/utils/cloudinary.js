import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
});

export const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "properties",
        allowed_formats: ["jpg", "jpeg", "png"],
    },
});

export { cloudinary };
