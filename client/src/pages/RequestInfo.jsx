import { useState } from 'react';
import {  Small } from '@/custom/Typography';
import NavigateSloter from "@/components/NavigateSloter";
import GetInTouch from "@/components/GetInTouch";
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

export default function RequestInfo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        city: '',
        query: '',
        role: 'owner',
    });

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        console.log("Form Data:", formData);
    };

    const cities = [
        "Mumbai", "Delhi", "Bengaluru", "Hyderabad", "Ahmedabad", "Chennai",
        "Kolkata", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore",
        "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad",
        "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot"
    ];

    const roles = ['owner', 'dealer', 'builder'];

    return (
        <div className="max-w-4xl my-24 mx-auto px-6">
            <NavigateSloter img='/assets/reqInfo.png' headline='Request Information' />
            <Small>
                Call us on our toll free number <span className='text-blue-600'>+91 9270033002</span>
            </Small>

            <div className='grid gap-6 mt-8'>
                {/* Role Selection */}
                <div className="flex flex-col space-y-3">
                    <Label htmlFor="role" className="font-bold">You are</Label>
                    <div className='flex items-center gap-3'>
                        {roles.map((role) => (
                            <span
                                key={role}
                                onClick={() => handleChange('role', role)}
                                className={`px-4 py-1 rounded-full text-sm cursor-pointer border transition
                                ${formData.role === role
                                        ? 'bg-blue-600 text-white border-blue-600'
                                        : 'bg-blue-50 hover:bg-blue-200 border-blue-300 text-blue-600'}`}
                            >
                                {role.charAt(0).toUpperCase() + role.slice(1)}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Row 1 */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="name">Name:</Label>
                        <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            id="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="phone">Phone:</Label>
                        <Input
                            id="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="company">Company Name (Optional):</Label>
                        <Input
                            id="company"
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="query">Query:</Label>
                        <Textarea
                            id="query"
                            placeholder="Type your query here."
                            value={formData.query}
                            onChange={(e) => handleChange('query', e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="city">City:</Label>
                        <Select onValueChange={(value) => handleChange('city', value)}>
                            <SelectTrigger id="city" className="w-full">
                                <SelectValue placeholder="Select a city" />
                            </SelectTrigger>
                            <SelectContent>
                                {cities.map((city) => (
                                    <SelectItem key={city} value={city}>{city}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* Submit */}
                <div>
                    <Button onClick={handleSubmit} className="bg-blue-700 hover:bg-blue-500 cursor-pointer">
                        Send Request
                    </Button>
                </div>
            </div>

            <GetInTouch />
        </div>
    );
}
