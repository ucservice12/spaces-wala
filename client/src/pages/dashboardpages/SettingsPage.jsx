import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Update your preferences and account info.</p>
                </CardContent>
            </Card>
        </div>
    );
}
