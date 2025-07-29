import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        propertyCategory: {
            type: String,
            enum: ["Residential", "Commercial"],
            required: true,
        },
        listingType: {
            type: String,
            enum: ["Rent", "Sell", "PG"],
            required: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        propertyType: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
        description: {
            type: String,
            required: true,
            maxlength: 1000,
        },
        bedrooms: {
            type: String,
            enum: ["1", "2", "3", "4", "5+", "Studio"],
            required: true,
        },
        bathrooms: {
            type: String,
            enum: ["1", "2", "3", "4", "5+"],
            required: true,
        },
        furnishing: {
            type: String,
            enum: ["Unfurnished", "Semi-furnished", "Fully-furnished"],
            required: true,
        },
        area: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        negotiable: {
            type: Boolean,
            default: false,
        },
        images: {
            type: [String],
            //   validate: [(val) => val.length > 0, "At least one image is required"],
        },
    },
    { timestamps: true }
);

export default mongoose.model("Property", propertySchema);
