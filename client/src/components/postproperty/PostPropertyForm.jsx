import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Home, Building2, FileImage } from "lucide-react";
import { useSelector } from "react-redux";
import { uploadproperty } from "../../machine/property";

const PostPropertyForm = () => {
    const [step, setStep] = useState(1);
    const { user } = useSelector((state) => state.auth);
    console.log(user)
    const [formData, setFormData] = useState({
        userId: user?._id,
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

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else if (type === "file") {
            setFormData({ ...formData, images: [...files] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const next = () => setStep((prev) => prev + 1);
    const prev = () => setStep((prev) => prev - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await uploadproperty(formData)
    };

    const steps = [
        { title: "Basic Details", icon: <Home className="w-4 h-4" /> },
        { title: "Property Info", icon: <Building2 className="w-4 h-4" /> },
        { title: "Price & Media", icon: <FileImage className="w-4 h-4" /> },
    ];

    return (
        <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-start justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-5xl rounded-2xl bg-white/70 backdrop-blur shadow-lg border border-gray-200 p-6 md:p-10"
            >
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Post Your Property on <span className="text-blue-600">SpacesWala</span>
                </h2>

                {/* Steps Navigation */}
                <div className="flex justify-center gap-6 mb-10">
                    {steps.map((s, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 ${step === index + 1
                                ? "bg-blue-100 text-blue-600 font-semibold"
                                : "text-gray-500"
                                }`}
                        >
                            {s.icon} {s.title}
                        </div>
                    ))}
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
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
                                </div>

                                <div className="col-span-2">
                                    <Label>City</Label>
                                    <Input
                                        name="city"
                                        placeholder="e.g. Mumbai, Pune"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
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
                                </div>

                                <div>
                                    <Label>Title</Label>
                                    <Input
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="Listing title"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <Label>Description</Label>
                                    <Textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Describe your property"
                                    />
                                </div>

                                <div>
                                    <Label>Bedrooms</Label>
                                    <Input
                                        type="number"
                                        name="bedrooms"
                                        value={formData.bedrooms}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <Label>Bathrooms</Label>
                                    <Input
                                        type="number"
                                        name="bathrooms"
                                        value={formData.bathrooms}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <Label>Furnishing</Label>
                                    <Input
                                        name="furnishing"
                                        value={formData.furnishing}
                                        onChange={handleChange}
                                        placeholder="Furnished / Semi / Unfurnished"
                                    />
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
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}
                    </motion.div>

                    {/* Step buttons */}
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
                            // <Button type="submit">Submit</Button>
                            "upload"
                        )}
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default PostPropertyForm;
