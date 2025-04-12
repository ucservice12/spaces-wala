import { useState } from "react";
import { TypographyH4 } from '@/custom/Typography';
import NavigateSloter from "@/components/NavigateSloter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Star } from "lucide-react";

export default function FeedBackSend() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        designation: '',
        feedbackType: '',
        feedbackText: '',
        rating: 0,
    });

    const [errors, setErrors] = useState({});

    const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Awesome"];
    const feedbackTypeOptions = [
        "I want to report a problem",
        "I have a suggestion",
        "I want to compliment spaceswala",
        "Other"
    ];

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setErrors(prev => ({ ...prev, [field]: '' }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.designation.trim()) newErrors.designation = "Designation is required.";
        if (!formData.feedbackType) newErrors.feedbackType = "Please select feedback type.";
        if (!formData.feedbackText.trim()) newErrors.feedbackText = "Feedback message is required.";
        if (formData.rating === 0) newErrors.rating = "Please give a rating.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log("Feedback Data:", formData);

            // Clear form
            setFormData({
                name: '',
                email: '',
                designation: '',
                feedbackType: '',
                feedbackText: '',
                rating: 0,
            });

            setErrors({});
        }
    };

    return (
        <div className="max-w-4xl my-26 mx-auto px-6">
            <NavigateSloter img='/assets/feedback.png' headline='Feedback' />

            <div className='max-w-md mx-auto grid gap-6'>
                <TypographyH4>We would love to hear you!</TypographyH4>

                {/* Name */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="name">Name:</Label>
                    <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        id="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                    />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>

                {/* Designation */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="designation">Designation:</Label>
                    <Input
                        id="designation"
                        placeholder="Your designation (e.g., Developer, Manager)"
                        value={formData.designation}
                        onChange={(e) => handleChange('designation', e.target.value)}
                    />
                    {errors.designation && <p className="text-red-600 text-sm">{errors.designation}</p>}
                </div>

                {/* Rating */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="rating">Rate spaceswala mobile app:</Label>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            {Array(5).fill(0).map((_, index) => (
                                <Star
                                    key={index}
                                    className={`w-6 h-6 cursor-pointer transition-all ${index < formData.rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                    onClick={() => handleChange('rating', index + 1)}
                                    fill={index < formData.rating ? 'currentColor' : 'none'}
                                />
                            ))}
                        </div>
                        {formData.rating > 0 && (
                            <p className="text-sm text-blue-600 font-medium">
                                {ratingLabels[formData.rating - 1]}
                            </p>
                        )}
                    </div>
                    {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
                </div>

                {/* Feedback Type */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="type">Feedback Type:</Label>
                    <Select
                        value={formData.feedbackType}
                        onValueChange={(value) => handleChange('feedbackType', value)}
                    >
                        <SelectTrigger id="type" className="w-full">
                            <SelectValue placeholder="Select a feedback" />
                        </SelectTrigger>
                        <SelectContent>
                            {feedbackTypeOptions.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.feedbackType && <p className="text-red-600 text-sm">{errors.feedbackType}</p>}
                </div>

                {/* Feedback Text */}
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="query">Feedback:</Label>
                    <Textarea
                        id="query"
                        placeholder="Type your feedback"
                        value={formData.feedbackText}
                        onChange={(e) => handleChange('feedbackText', e.target.value)}
                    />
                    {errors.feedbackText && <p className="text-red-600 text-sm">{errors.feedbackText}</p>}
                </div>

                {/* Submit */}
                <div>
                    <Button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-500 cursor-pointer">
                        Send Feedback
                    </Button>
                </div>
            </div>
        </div>
    );
}
