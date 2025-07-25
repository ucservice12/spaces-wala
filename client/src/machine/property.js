import customAxios from "../customAxios/Customaxios";

export const uploadproperty = async (formData, loading, setLoading) => {
    setLoading(true);
    const propertyData = new FormData();

    for (const key in formData) {
        if (key === "images") {
            for (let file of formData.images) {
                propertyData.append("images", file);
            }
        } else {
            propertyData.append(key, formData[key]);
        }
    }

    try {
        const res = await customAxios.post("/property/post", propertyData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        setLoading(false)
        alert("Property uploaded successfully!");
        console.log(res.data);
    } catch (err) {
        setLoading(false)
        console.error(err);
        alert("Error uploading property.");
    }
};
