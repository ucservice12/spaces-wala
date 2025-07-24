import customAxios from "../customAxios/Customaxios";

export const uploadproperty = async (formData) => {
    console.log(formData)
    const propertyData = new FormData();

    for (const key in formData) {
        if (key === "images") {
            formData.images.forEach((file) => form.append("images", file));
        } else {
            propertyData.append(key, formData[key]);
        }
    }

    try {
        console.log(propertyData)
        const res = await customAxios("/property/post", propertyData);
        alert("Property uploaded successfully!");
        console.log(res.data);
    } catch (err) {
        console.error(err);
        alert("Error uploading property.");
    }
};