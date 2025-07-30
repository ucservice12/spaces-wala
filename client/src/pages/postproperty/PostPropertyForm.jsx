import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Home, Building2, FileImage, ChevronLeft, ChevronRight } from "lucide-react";
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
    const [isSubmitting, setIsSubmitting] = useState(false);

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
        if (formData.images.length + files.length > 6) {
            setErrors({ ...errors, images: "Max 6 images allowed" });
            return;
        }
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
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;
        setIsSubmitting(true);
        await uploadproperty(formData, setLoading);
        setIsSubmitting(false);
    };

    const next = () => {
        if (validateStep()) {
            setStep((prev) => prev + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const prev = () => {
        setStep((prev) => prev - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const steps = [
        { title: "Basic Details", icon: <Home className="w-5 h-5" /> },
        { title: "Property Info", icon: <Building2 className="w-5 h-5" /> },
        { title: "Price & Media", icon: <FileImage className="w-5 h-5" /> },
    ];

    return (
        <>
            {loading && <LoadingPage message="Posting Your Property..." />}
            <div className="min-h-screen pt-40 px-6 bg-[#b6cade] from-blue-50 via-white to-purple-100 flex items-start justify-center">
                <div className="w-full max-w-4xl rounded-xl bg-white/80 backdrop-blur-lg shadow-md border border-gray-200/80 
  p-3 md:p-6 flex flex-col md:flex-row gap-4 
  max-h-[80vh] overflow-y-auto">

                    {/* Vertical Stepper (Desktop) - Darker version */}
                    <div className="hidden md:flex flex-col gap-4 pt-4 w-1/4 border-r pr-4">
                        {steps.map((s, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-3 text-sm px-3 py-3 rounded-lg cursor-default transition-all duration-300 ${step === index + 1
                                    ? "bg-gray-800 text-white shadow-lg"
                                    : "text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {s.icon}
                                {s.title}
                            </div>
                        ))}
                    </div>

                    {/* Horizontal Stepper (Mobile) */}
                    <div className="md:hidden flex justify-center mb-6">
                        <div className="flex items-center gap-2 bg-gray-100/50 rounded-full p-1">
                            {steps.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setStep(index + 1)}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${step === index + 1 ? "bg-gray-800" : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Form Content */}
                    <form
                        className="flex-1 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-10rem)] px-1 md:px-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                Post Your Property on <span className="text-gray-800">SpacesWala</span>
                            </h2>
                            <p className="text-gray-500">
                                {steps[step - 1].title}
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            {step === 1 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="col-span-2">
                                        <Label>Property Category</Label>
                                        <div className="flex flex-wrap gap-3 mt-2">
                                            {["Residential", "Commercial"].map((cat) => (
                                                <div key={cat}>
                                                    <Button
                                                        type="button"
                                                        variant={
                                                            formData.propertyCategory === cat
                                                                ? "default"
                                                                : "outline"
                                                        }
                                                        className="min-w-[120px]"
                                                        onClick={() =>
                                                            setFormData({
                                                                ...formData,
                                                                propertyCategory: cat,
                                                            })
                                                        }
                                                    >
                                                        {cat}
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                        {errors.propertyCategory && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.propertyCategory}
                                            </p>
                                        )}
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Looking To</Label>
                                        <div className="flex flex-wrap gap-3 mt-2">
                                            {["Rent", "Sell", "PG/Co-living"].map((type) => (
                                                <div key={type}>
                                                    <Button
                                                        type="button"
                                                        variant={
                                                            formData.listingType === type
                                                                ? "default"
                                                                : "outline"
                                                        }
                                                        className="min-w-[100px]"
                                                        onClick={() =>
                                                            setFormData({
                                                                ...formData,
                                                                listingType: type,
                                                            })
                                                        }
                                                    >
                                                        {type}
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                        {errors.listingType && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.listingType}
                                            </p>
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
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.city}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Step 2 */}
                            {step === 2 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label>Property Type</Label>
                                        <Input
                                            name="propertyType"
                                            value={formData.propertyType}
                                            onChange={handleChange}
                                            placeholder="e.g. Apartment, Villa"
                                        />
                                        {errors.propertyType && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.propertyType}
                                            </p>
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
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.title}
                                            </p>
                                        )}
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            placeholder="Describe your property"
                                            rows={4}
                                        />
                                        {errors.description && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.description}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Bedrooms</Label>
                                        <Input
                                            type="number"
                                            name="bedrooms"
                                            value={formData.bedrooms}
                                            onChange={handleChange}
                                            min="0"
                                        />
                                        {errors.bedrooms && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.bedrooms}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <Label>Bathrooms</Label>
                                        <Input
                                            type="number"
                                            name="bathrooms"
                                            value={formData.bathrooms}
                                            onChange={handleChange}
                                            min="0"
                                        />
                                        {errors.bathrooms && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.bathrooms}
                                            </p>
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
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.furnishing}
                                            </p>
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
                                            min="0"
                                        />
                                        {errors.area && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.area}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Step 3 */}
                            {step === 3 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label>Price (₹)</Label>
                                        <Input
                                            type="number"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="Enter price"
                                            min="0"
                                        />
                                        {errors.price && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.price}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-2 mt-2">
                                        <input
                                            type="checkbox"
                                            id="negotiable"
                                            name="negotiable"
                                            checked={formData.negotiable}
                                            onChange={handleChange}
                                            className="w-4 h-4 accent-blue-600"
                                        />
                                        <Label htmlFor="negotiable" className="cursor-pointer">
                                            Negotiable Price
                                        </Label>
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Upload Images (Max 6)</Label>
                                        <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                            <Input
                                                type="file"
                                                name="images"
                                                accept="image/*"
                                                multiple
                                                onChange={handleImageChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <FileImage className="w-8 h-8 text-gray-400" />
                                                <p className="text-sm text-gray-500">
                                                    Click to upload or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    JPEG, PNG (Max 6 images)
                                                </p>
                                            </div>
                                        </div>
                                        {errors.images && (
                                            <p className="text-sm text-red-600 mt-1">
                                                {errors.images}
                                            </p>
                                        )}

                                        {/* Image Preview */}
                                        {formData.images.length > 0 && (
                                            <div className="mt-4">
                                                <Label>Selected Images ({formData.images.length}/6)</Label>
                                                <div className="flex flex-wrap mt-2 gap-3">
                                                    {formData.images.map((file, index) => (
                                                        <div
                                                            key={index}
                                                            className="relative w-20 h-20 rounded-lg border overflow-hidden shadow-sm"
                                                        >
                                                            <img
                                                                src={URL.createObjectURL(file)}
                                                                alt={`preview-${index}`}
                                                                className="object-cover w-full h-full"
                                                            />
                                                            <button
                                                                type="button"
                                                                className="absolute top-0 right-0 bg-red-600 text-white text-xs p-1 rounded-bl-lg"
                                                                onClick={() => handleImageRemove(index)}
                                                            >
                                                                ✕
                                                            </button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between pt-8 mt-6 border-t border-gray-200">
                            {step > 1 ? (
                                <div>
                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={prev}
                                        className="gap-1"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Previous
                                    </Button>
                                </div>
                            ) : (
                                <div />
                            )}

                            {step < 3 ? (
                                <div>
                                    <Button
                                        type="button"
                                        onClick={next}
                                        className="gap-1 bg-gray-800 hover:bg-gray-700"
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    <button
                                        type="submit"
                                        // disabled={isSubmitting}
                                        className="p-2  bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg"
                                    >
                                        {isSubmitting ? "Posting..." : "Post Property"}
                                    </button>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default PostPropertyForm;