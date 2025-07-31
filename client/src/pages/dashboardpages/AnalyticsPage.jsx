

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from "recharts";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Eye, MessageSquare, Heart, Home } from "lucide-react";

const statCards = [
  { label: "Total Views", value: 1245, icon: <Eye className="w-5 h-5 text-blue-500" /> },
  { label: "Inquiries", value: 78, icon: <MessageSquare className="w-5 h-5 text-green-500" /> },
  { label: "Saved Listings", value: 36, icon: <Heart className="w-5 h-5 text-red-500" /> },
  { label: "Active Listings", value: 12, icon: <Home className="w-5 h-5 text-purple-500" /> },
];

const dailyViewsData = [
  { day: "Mon", views: 120 },
  { day: "Tue", views: 180 },
  { day: "Wed", views: 220 },
  { day: "Thu", views: 160 },
  { day: "Fri", views: 300 },
  { day: "Sat", views: 240 },
  { day: "Sun", views: 125 },
];

const propertyStats = [
  { name: "2BHK Mumbai", views: 450, inquiries: 32 },
  { name: "Studio Pune", views: 350, inquiries: 21 },
  { name: "Villa Goa", views: 280, inquiries: 15 },
  { name: "1BHK Delhi", views: 160, inquiries: 10 },
];

export default function AnalyticsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-gray-800">Analytics Overview</h1>
          <p className="text-gray-500">Your listing engagement stats</p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 rounded-xl shadow-md bg-white flex items-center gap-3">
                {stat.icon}
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-lg font-semibold text-gray-800">{stat.value}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Views Line Chart */}
        <Card className="p-6 shadow-md rounded-xl bg-white">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Daily Views</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyViewsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Property Stats Bar Chart */}
        <Card className="p-6 shadow-md rounded-xl bg-white">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Property Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={propertyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#3b82f6" name="Views" />
              <Bar dataKey="inquiries" fill="#10b981" name="Inquiries" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
