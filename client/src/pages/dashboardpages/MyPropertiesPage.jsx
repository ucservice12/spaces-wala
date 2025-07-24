import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyPropertiesPage() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>My Listed Properties</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <p>You have 3 active listings</p>
                    {/* Map through property cards */}
                </CardContent>
            </Card>
        </div>
    );
}
