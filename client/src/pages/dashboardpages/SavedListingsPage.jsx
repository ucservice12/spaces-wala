import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SavedListingsPage() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Saved Listings</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <p>You have 5 saved listings.</p>
                </CardContent>
            </Card>
        </div>
    );
}
