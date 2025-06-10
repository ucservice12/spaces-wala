import { Mail, Phone } from "lucide-react";
import { TypographyLarge, TypographySmall } from "@/custom/Typography";
import { Button } from '@/components/ui/button'
import { Card } from "@/components/ui/card"

export default function AgentContactDetails() {
    return (
        <Card className="p-6 mb-6">
            <TypographyLarge className="mb-3">Conatct Agent</TypographyLarge>
            <div className="flex items-center mb-6">
                <img
                    src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg"
                    alt="Agent"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    loading="lazy"
                />
                <div>
                    <h4 className="font-medium">Amit Kapoor</h4>
                    <TypographySmall>spaceswala.com Agent</TypographySmall>
                    <div className="flex items-center mt-1">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                                <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">(42 reviews)</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <Button className='w-full'>
                    <Phone size={18} /> Call Agent
                </Button>
                <Button variant="outline" className='w-full text-blue-700'>
                    <Mail size={18} /> Email Agent
                </Button>
            </div>
        </Card>
    )
}
