import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { TypographyLarge } from '@/custom/Typography'
import { TypographyMuted, TypographySmall } from '@/custom/Typography'

export default function HomeLoanCalculator({ property }) {
    return (
        <Card className="p-6">
            <TypographyLarge className='mb-3'>Home Loan Calculator</TypographyLarge>
            <form>
                <div className="mb-4 grid gap-2">
                    <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                    <Input
                        type="text"
                        value={property.price.toLocaleString()}
                    />
                </div>
                <div className="mb-4 grid gap-2">
                    <Label htmlFor="interestRate">Interest Rate (%)</Label>
                    <Input
                        type="text"
                        defaultValue="8.5"
                    />
                </div>
                <div className="mb-4 grid gap-2">
                    <Label htmlFor="loanTenure">Loan Tenure (Years)</Label>
                    <Input
                        type="text"
                        defaultValue="20"
                    />
                </div>
                <div className="p-4 bg-gray-50 rounded-md mb-4">
                    <div className="flex justify-between mb-2">
                        <TypographyMuted>Monthly EMI</TypographyMuted>
                        <TypographySmall>₹58,674</TypographySmall>
                    </div>
                    <div className="flex justify-between">
                        <TypographyMuted>Total Interest Payable</TypographyMuted>
                        <TypographySmall>₹40,25,760</TypographySmall>
                    </div>
                </div>
                <Button
                    type="button"
                    className="w-full"
                >
                    Apply for Home Loan
                </Button>
            </form>
        </Card>
    )
}
