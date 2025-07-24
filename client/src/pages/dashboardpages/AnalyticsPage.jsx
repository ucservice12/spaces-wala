import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AnalyticsPage() {
    return (
        <div className="grid gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Listing Views</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Total views this month: 1,234</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Leads Generated</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>You received 42 leads.</p>
                </CardContent>
            </Card>
        </div>
    );
}
