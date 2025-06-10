import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { TypographyLarge } from '@/custom/Typography'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SchedualVisit() {
    return (
        <Card className="p-6 mb-6">
            <TypographyLarge className='mb-3'>Schedule a Visit</TypographyLarge>
            <form>
                <div className="mb-4 grid gap-2">
                    <Label htmlFor="preferrendTime"> Preferred Date</Label>
                    <Input
                        type="date"
                    />
                </div>
                <div className="mb-4 grid gap-2">
                    <Label htmlFor="preferrendTime">Preferred Time</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Time" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>TimeTable</SelectLabel>
                                <SelectItem value="apple">Morning (9AM - 12PM)</SelectItem>
                                <SelectItem value="banana">Afternoon (12PM - 3PM)</SelectItem>
                                <SelectItem value="blueberry">Evening (3PM - 6PM)</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                >
                    Schedule Visit
                </Button>
            </form>
        </Card>
    )
}
