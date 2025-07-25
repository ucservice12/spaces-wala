import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Home, Building2, FileImage } from "lucide-react";
import { useSelector } from "react-redux";
import { uploadproperty } from "../../machine/property";
import LoadingPage from '../LoadingPage';

const PostPropertyForm = () => {
    const [step, setStep] = useState(1);
    const { user } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        userId: "",
        propertyCategory: "",
        listingType: "",
        city: "",
        propertyType: "",
        title: "",
        description: "",
        bedrooms: "",
        bathrooms: "",
        furnishing: "",
        area: "",
        price: "",
        negotiable: false,
        images: [],
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (user?._id) {
            setFormData((prev) => ({ ...prev, userId: user._id }));
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prev) => ({
            ...prev,
            images: [...prev.images, ...files],
        }));
    };

    const handleImageRemove = (index) => {
        const updatedImages = [...formData.images];
        updatedImages.splice(index, 1);
        setFormData({ ...formData, images: updatedImages });
    };

    const validateStep = () => {
        const newErrors = {};
        if (step === 1) {
            if (!formData.propertyCategory) newErrors.propertyCategory = "Please select category.";
            if (!formData.listingType) newErrors.listingType = "Please select listing type.";
            if (!formData.city.trim()) newErrors.city = "City is required.";
        } else if (step === 2) {
            if (!formData.propertyType.trim()) newErrors.propertyType = "Property type is required.";
            if (!formData.title.trim()) newErrors.title = "Title is required.";
            if (!formData.description.trim()) newErrors.description = "Description is required.";
            if (!formData.bedrooms) newErrors.bedrooms = "Enter number of bedrooms.";
            if (!formData.bathrooms) newErrors.bathrooms = "Enter number of bathrooms.";
            if (!formData.furnishing.trim()) newErrors.furnishing = "Furnishing is required.";
            if (!formData.area) newErrors.area = "Area is required.";
        } else if (step === 3) {
            if (!formData.price) newErrors.price = "Price is required.";
            if (formData.images.length === 0) newErrors.images = "Upload at least 1 image.";
            if (formData.images.length > 6) newErrors.images = "Upload only 6 images.";

        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;
        await uploadproperty(formData, loading, setLoading);
    };

    const next = () => {
        if (validateStep()) setStep((prev) => prev + 1);
    };

    const prev = () => setStep((prev) => prev - 1);

    const steps = [
        { title: "Basic Details", icon: <Home className="w-5 h-5" /> },
        { title: "Property Info", icon: <Building2 className="w-5 h-5" /> },
        { title: "Price & Media", icon: <FileImage className="w-5 h-5" /> },
    ];


    return (
        <>
            {loading && <LoadingPage message="We Posting Your Property" />}
            <div className="min-h-screen pt-32 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-100 flex items-start justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-6xl rounded-2xl bg-white/70 backdrop-blur shadow-xl border border-gray-200 p-4 md:p-8 flex gap-6"
                >
                    {/* Vertical Stepper */}
                    <div className="hidden md:flex flex-col gap-4 pt-4 w-1/4 border-r pr-4">
                        {steps.map((s, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-3 text-sm px-3 py-2 rounded-lg transition-all duration-300 ${step === index + 1
                                    ? "bg-blue-600 text-white shadow"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {s.icon} {s.title}
                            </div>
                        ))}
                    </div>

                    {/* Form Steps */}
                    <form
                        className="flex-1 overflow-y-auto max-h-[calc(100vh-12rem)] px-1 md:px-2 space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                            Post Your Property on <span className="text-blue-600">SpacesWala</span>
                        </h2>

                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {/* Step 1 */}
                            {step === 1 && (
                                <>
                                    <div className="col-span-2">
                                        <Label>Property Category</Label>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {["Residential", "Commercial"].map((cat) => (
                                                <Button
                                                    key={cat}
                                                    type="button"
                                                    variant={
                                                        formData.propertyCategory === cat ? "default" : "outline"
                                                    }
                                                    onClick={() =>
                                                        setFormData({ ...formData, propertyCategory: cat })
                                                    }
                                                >
                                                    {cat}
                                                </Button>
                                            ))}
                                        </div>
                                        {errors.propertyCategory && (
                                            <p className="text-sm text-red-600 mt-1">{errors.propertyCategory}</p>
                                        )}
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Looking To</Label>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {["Rent", "Sell", "PG/Co-living"].map((type) => (
                                                <Button
                                                    key={type}
                                                    type="button"
                                                    variant={formData.listingType === type ? "default" : "outline"}
                                                    onClick={() =>
                                                        setFormData({ ...formData, listingType: type })
                                                    }
                                                >
                                                    {type}
                                                </Button>
                                            ))}
                                        </div>
                                        {errors.listingType && (
                                            <p className="text-sm text-red-600 mt-1">{errors.listingType}</p>
                                        )}
                                    </div>

                                    <div className="col-span-2">
                                        <Label>City</Label>
                                        <Input
                                            name="city"
                                            placeholder="e.g. Mumbai, Pune"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                        {errors.city && (
                                            <p className="text-sm text-red-600 mt-1">{errors.city}</p>
                                        )}
                                    </div>
                                </>
                            )}

                            {/* Step 2 */}
                            {step === 2 && (
                                <>
                                    <div>
                                        <Label>Property Type</Label>
                                        <Input
                                            name="propertyType"
                                            value={formData.propertyType}
                                            onChange={handleChange}
                                            placeholder="e.g. Apartment, Villa"
                                        />
                                        {errors.propertyType && (
                                            <p className="text-sm text-red-600 mt-1">{errors.propertyType}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Title</Label>
                                        <Input
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            placeholder="Listing title"
                                        />
                                        {errors.title && (
                                            <p className="text-sm text-red-600 mt-1">{errors.title}</p>
                                        )}
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            placeholder="Describe your property"
                                        />
                                        {errors.description && (
                                            <p className="text-sm text-red-600 mt-1">{errors.description}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Bedrooms</Label>
                                        <Input
                                            type="number"
                                            name="bedrooms"
                                            value={formData.bedrooms}
                                            onChange={handleChange}
                                        />
                                        {errors.bedrooms && (
                                            <p className="text-sm text-red-600 mt-1">{errors.bedrooms}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Bathrooms</Label>
                                        <Input
                                            type="number"
                                            name="bathrooms"
                                            value={formData.bathrooms}
                                            onChange={handleChange}
                                        />
                                        {errors.bathrooms && (
                                            <p className="text-sm text-red-600 mt-1">{errors.bathrooms}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Furnishing</Label>
                                        <Input
                                            name="furnishing"
                                            value={formData.furnishing}
                                            onChange={handleChange}
                                            placeholder="Furnished / Semi / Unfurnished"
                                        />
                                        {errors.furnishing && (
                                            <p className="text-sm text-red-600 mt-1">{errors.furnishing}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Area (sq. ft)</Label>
                                        <Input
                                            type="number"
                                            name="area"
                                            value={formData.area}
                                            onChange={handleChange}
                                            placeholder="e.g. 1200"
                                        />
                                        {errors.area && (
                                            <p className="text-sm text-red-600 mt-1">{errors.area}</p>
                                        )}
                                    </div>
                                </>
                            )}

                            {/* Step 3 */}
                            {step === 3 && (
                                <>
                                    <div>
                                        <Label>Price (₹)</Label>
                                        <Input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="Enter price"
                                        />
                                        {errors.price && (
                                            <p className="text-sm text-red-600 mt-1">{errors.price}</p>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2 mt-2">
                                        <input
                                            type="checkbox"
                                            name="negotiable"
                                            checked={formData.negotiable}
                                            onChange={handleChange}
                                        />
                                        <Label className="cursor-pointer">Negotiable Price</Label>
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Upload Images</Label>
                                        <Input
                                            type="file"
                                            name="images"
                                            accept="image/*"
                                            multiple
                                            onChange={handleImageChange}
                                        />
                                        {errors.images && (
                                            <p className="text-sm text-red-600 mt-1">{errors.images}</p>
                                        )}

                                        {/* Image Preview */}
                                        <div className="flex flex-wrap mt-4 gap-4">
                                            {formData.images.map((file, index) => (
                                                <div
                                                    key={index}
                                                    className="relative w-24 h-24 rounded border overflow-hidden"
                                                >
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={`preview-${index}`}
                                                        className="object-cover w-full h-full"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded-bl"
                                                        onClick={() => handleImageRemove(index)}
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>

                        {/* Step Buttons */}
                        <div className="flex justify-between pt-6">
                            {step > 1 && (
                                <Button variant="outline" type="button" onClick={prev}>
                                    Previous
                                </Button>
                            )}
                            {step < 3 ? (
                                <Button type="button" onClick={next}>
                                    Next
                                </Button>
                            ) : (
                                <button className="bg-blue-600 p-2 rounded-lg text-white" type="submit">
                                    Post Your Property
                                </button>
                            )}
                        </div>
                    </form>
                </motion.div>
            </div>
        </>
    );
};

export default PostPropertyForm;
