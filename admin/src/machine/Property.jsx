import axios from "axios";

const API_URL = import.meta.env.VITE_APP_API_URL;

console.log(API_URL);

export const addProperties = async (property) => {
    console.log(property);
    try {
        const response = await axios.post(`${API_URL}/properties/`, {
            title: property?.title,
            images: property?.image,
            category: property?.category,
            description: property?.description,
            location: property?.location,
            price: property?.price,
            features: property?.features,
            propertyType: property?.type,
            amenities: property?.amenities,
            area: property?.area,
            bathrooms: property?.bathrooms,
            bedrooms: property?.bedrooms,
            dateAdded: property?.dateAdded,
            isVerified: property?.isVerified,
            status: property?.status,
        })
        return response.data;

    } catch (error) {
        console.log("property error", error);
    }
}
