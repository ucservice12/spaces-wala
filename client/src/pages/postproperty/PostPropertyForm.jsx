import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, FileImage, ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import { uploadproperty } from "../../machine/property";
import LoadingPage from '../LoadingPage';
// Bubble component
const Bubble = ({ size, left, delay, duration }) => {
  return (
    <motion.div
      className="absolute rounded-full bg-white/20 backdrop-blur-sm"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: '-10%',
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{ 
        y: '-110vh', 
        opacity: [0, 0.5, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};

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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    const buttonHover = {
        scale: 1.03,
        transition: { type: "spring", stiffness: 400, damping: 10 },
    };

    return (
        <>
            {loading && <LoadingPage message="Posting Your Property..." />}
            <div className="min-h-screen pt-40 px-4 bg-[#b6cade] from-blue-50 via-white to-purple-100 flex items-start justify-center">
                 {/* Bubble Background */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(15)].map((_, i) => (
                    <Bubble
                      key={i}
                      size={`${Math.random() * 100 + 50}px`}
                      left={Math.random() * 100}
                      delay={Math.random() * 5}
                      duration={Math.random() * 10 + 10}
                    />
                  ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-6xl rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl border border-gray-200/80 p-4 md:p-8 flex flex-col md:flex-row gap-6"
                >
                    {/* Vertical Stepper (Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:flex flex-col gap-4 pt-4 w-1/4 border-r pr-4"
                    >
                        {steps.map((s, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`flex items-center gap-3 text-sm px-3 py-3 rounded-lg cursor-default transition-all duration-300 ${
                                    step === index + 1
                                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                                        : "text-gray-600 hover:bg-gray-100/50"
                                }`}
                            >
                                <motion.span
                                    animate={{ rotate: step === index + 1 ? [0, 10, -5, 0] : 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {s.icon}
                                </motion.span>
                                {s.title}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Horizontal Stepper (Mobile) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="md:hidden flex justify-center mb-6"
                    >
                        <div className="flex items-center gap-2 bg-gray-100/50 rounded-full p-1">
                            {steps.map((_, index) => (
                                <motion.div
                                    key={index}
                                    onClick={() => setStep(index + 1)}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${
                                        step === index + 1 ? "bg-blue-600" : "bg-gray-300"
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Content */}
                    <form
                        className="flex-1 overflow-y-auto max-h-[calc(100vh-10rem)] px-1 md:px-4"
                        onSubmit={handleSubmit}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center mb-8"
                        >
                            <motion.h2
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
                            >
                                Post Your Property on{" "}
                                <motion.span
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                                    animate={{
                                        backgroundPosition: ["0% 50%", "100% 50%"],
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        duration: 3,
                                    }}
                                >
                                    SpacesWala
                                </motion.span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-500"
                            >
                                {steps[step - 1].title}
                            </motion.p>
                        </motion.div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: step > 1 ? 50 : -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: step > 1 ? -50 : 50 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                variants={containerVariants}
                                className="space-y-6"
                            >
                                {/* Step 1 */}
                                {step === 1 && (
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    >
                                        <motion.div variants={itemVariants} className="col-span-2">
                                            <Label>Property Category</Label>
                                            <motion.div className="flex flex-wrap gap-3 mt-2">
                                                {["Residential", "Commercial"].map((cat) => (
                                                    <motion.div
                                                        key={cat}
                                                        whileHover={buttonHover}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
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
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                            {errors.propertyCategory && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.propertyCategory}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="col-span-2">
                                            <Label>Looking To</Label>
                                            <motion.div className="flex flex-wrap gap-3 mt-2">
                                                {["Rent", "Sell", "PG/Co-living"].map((type) => (
                                                    <motion.div
                                                        key={type}
                                                        whileHover={buttonHover}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
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
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                            {errors.listingType && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.listingType}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="col-span-2">
                                            <Label>City</Label>
                                            <Input
                                                name="city"
                                                placeholder="e.g. Mumbai, Pune"
                                                value={formData.city}
                                                onChange={handleChange}
                                            />
                                            {errors.city && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.city}
                                                </motion.p>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* Step 2 */}
                                {step === 2 && (
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    >
                                        <motion.div variants={itemVariants}>
                                            <Label>Property Type</Label>
                                            <Input
                                                name="propertyType"
                                                value={formData.propertyType}
                                                onChange={handleChange}
                                                placeholder="e.g. Apartment, Villa"
                                            />
                                            {errors.propertyType && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.propertyType}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <Label>Title</Label>
                                            <Input
                                                name="title"
                                                value={formData.title}
                                                onChange={handleChange}
                                                placeholder="Listing title"
                                            />
                                            {errors.title && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.title}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="col-span-2">
                                            <Label>Description</Label>
                                            <Textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                placeholder="Describe your property"
                                                rows={4}
                                            />
                                            {errors.description && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.description}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <Label>Bedrooms</Label>
                                            <Input
                                                type="number"
                                                name="bedrooms"
                                                value={formData.bedrooms}
                                                onChange={handleChange}
                                                min="0"
                                            />
                                            {errors.bedrooms && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.bedrooms}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <Label>Bathrooms</Label>
                                            <Input
                                                type="number"
                                                name="bathrooms"
                                                value={formData.bathrooms}
                                                onChange={handleChange}
                                                min="0"
                                            />
                                            {errors.bathrooms && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.bathrooms}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
                                            <Label>Furnishing</Label>
                                            <Input
                                                name="furnishing"
                                                value={formData.furnishing}
                                                onChange={handleChange}
                                                placeholder="Furnished / Semi / Unfurnished"
                                            />
                                            {errors.furnishing && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.furnishing}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div variants={itemVariants}>
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
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.area}
                                                </motion.p>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* Step 3 */}
                                {step === 3 && (
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                    >
                                        <motion.div variants={itemVariants}>
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
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.price}
                                                </motion.p>
                                            )}
                                        </motion.div>

                                        <motion.div
                                            variants={itemVariants}
                                            className="flex items-center gap-2 mt-2"
                                        >
                                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                <input
                                                    type="checkbox"
                                                    id="negotiable"
                                                    name="negotiable"
                                                    checked={formData.negotiable}
                                                    onChange={handleChange}
                                                    className="w-4 h-4 accent-blue-600"
                                                />
                                            </motion.div>
                                            <Label htmlFor="negotiable" className="cursor-pointer">
                                                Negotiable Price
                                            </Label>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="col-span-2">
                                            <Label>Upload Images (Max 6)</Label>
                                            <motion.div
                                                whileHover={{ scale: 1.01 }}
                                                className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center"
                                            >
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
                                            </motion.div>
                                            {errors.images && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-red-600 mt-1"
                                                >
                                                    {errors.images}
                                                </motion.p>
                                            )}

                                            {/* Image Preview */}
                                            {formData.images.length > 0 && (
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="mt-4"
                                                >
                                                    <Label>Selected Images ({formData.images.length}/6)</Label>
                                                    <motion.div className="flex flex-wrap mt-2 gap-3">
                                                        {formData.images.map((file, index) => (
                                                            <motion.div
                                                                key={index}
                                                                initial={{ scale: 0.8, opacity: 0 }}
                                                                animate={{ scale: 1, opacity: 1 }}
                                                                exit={{ scale: 0.8, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="relative w-20 h-20 rounded-lg border overflow-hidden shadow-sm"
                                                            >
                                                                <img
                                                                    src={URL.createObjectURL(file)}
                                                                    alt={`preview-${index}`}
                                                                    className="object-cover w-full h-full"
                                                                />
                                                                <motion.button
                                                                    type="button"
                                                                    whileHover={{ scale: 1.1 }}
                                                                    whileTap={{ scale: 0.9 }}
                                                                    className="absolute top-0 right-0 bg-red-600 text-white text-xs p-1 rounded-bl-lg"
                                                                    onClick={() => handleImageRemove(index)}
                                                                >
                                                                    ✕
                                                                </motion.button>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex justify-between pt-8 mt-6 border-t border-gray-200"
                        >
                            {step > 1 ? (
                                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={prev}
                                        className="gap-1"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Previous
                                    </Button>
                                </motion.div>
                            ) : (
                                <div /> // Empty div to maintain space
                            )}

                            {step < 3 ? (
                                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        type="button"
                                        onClick={next}
                                        className="gap-1 bg-gradient-to-r from-blue-600 to-indigo-600"
                                    >
                                        Next
                                        <ChevronRight className="w-4 h-4" />
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                                    >
                                        {isSubmitting ? (
                                            <motion.span
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            >
                                                ⏳
                                            </motion.span>
                                        ) : (
                                            "Post Property"
                                        )}
                                    </Button>
                                </motion.div>
                            )}
                        </motion.div>
                    </form>
                </motion.div>
            </div>
        </>
    );
};

export default PostPropertyForm;