
import Property from '../models/Property.js';

export const postProperty = async (req, res) => {
    try {
        const imageUrls = req.files.map((file) => file.path);
        console.log("image urls=>", imageUrls);
        console.log("body=>", req.body)
        const newProperty = new Property({
            ...req.body,
            images: imageUrls,
            // negotiable: req.body.negotiable === "true" || req.body.negotiable === true,
        });

        await newProperty.save();

        res.status(201).json({
            success: true,
            message: "Property created successfully",
            property: newProperty,
        });
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
