import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    propertyCategory: String,
    listingType: String,
    city: String,
    propertyType: String,
    title: String,
    description: String,
    bedrooms: String,
    bathrooms: String,
    furnishing: String,
    area: String,
    price: String,
    negotiable: Boolean,
    images: [String], // Cloudinary image URLs
}, { timestamps: true });

export default mongoose.model("Property", propertySchema);
