import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [form, setForm] = useState({
    name: "Carrie Sanders",
    email: "carrie@email.com",
    phone: "+91 9876543210",
    darkMode: false,
    emailAlerts: true,
    pushNotifs: true,
    publicProfile: true,
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saved settings:", form);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 p-6 md:p-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-500">Manage your account preferences</p>
        </motion.div>

        {/* Account Section */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-gray-700">Account Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>
        </motion.div>

        {/* Notifications Section */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Email Alerts on Inquiry</Label>
              <input
                type="checkbox"
                checked={form.emailAlerts}
                onChange={(e) => handleChange("emailAlerts", e.target.checked)}
                className="w-5 h-5 rounded"
              />
            </div>
            <div className="flex items-center justify-between">
              <Label>Push Notifications</Label>
              <input
                type="checkbox"
                checked={form.pushNotifs}
                onChange={(e) => handleChange("pushNotifs", e.target.checked)}
                className="w-5 h-5 rounded"
              />
            </div>
          </div>
        </motion.div>

        {/* Privacy Section */}
        <motion.div
          className="bg-white rounded-xl p-6 shadow space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-semibold text-gray-700">Privacy Settings</h2>
          <div className="flex items-center justify-between">
            <Label>Make Profile Public</Label>
            <input
              type="checkbox"
              checked={form.publicProfile}
              onChange={(e) => handleChange("publicProfile", e.target.checked)}
              className="w-5 h-5 rounded"
            />
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-right"
        >
          <Button
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-xl shadow"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
