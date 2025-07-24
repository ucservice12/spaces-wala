import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MessagesPage() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Messages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p>No new messages.</p>
                </CardContent>
            </Card>
        </div>
    );
}
