import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>My Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                    <p>Name: Abhijit Maske</p>
                    <p>Email: example@email.com</p>
                    <p>Phone: +91 XXXXX XXXXX</p>
                </CardContent>
            </Card>
        </div>
    );
}
