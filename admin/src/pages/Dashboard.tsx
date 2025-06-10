import React from 'react';
import { 
  Home, 
  Users, 
  Building2, 
  DollarSign, 
  ArrowUp, 
  ArrowDown,
  Activity
} from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import PropertyTypeChart from '../components/dashboard/PropertyTypeChart';
import RecentActivities from '../components/dashboard/RecentActivities';
import PropertyMetrics from '../components/dashboard/PropertyMetrics';
import PageHeader from '../components/common/PageHeader';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your real estate platform"
        icon={<Home size={24} />}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Properties" 
          value="1,542" 
          change={12.5} 
          icon={<Building2 size={20} />} 
          color="blue"
        />
        <StatCard 
          title="Active Users" 
          value="8,294" 
          change={8.1} 
          icon={<Users size={20} />} 
          color="green"
        />
        <StatCard 
          title="Monthly Revenue" 
          value="$126,384" 
          change={-2.3} 
          icon={<DollarSign size={20} />} 
          color="purple"
        />
        <StatCard 
          title="Property Views" 
          value="235,169" 
          change={24.6} 
          icon={<Activity size={20} />} 
          color="orange"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Revenue Overview</h2>
          <RevenueChart />
        </div>
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Property Distribution</h2>
          <PropertyTypeChart />
        </div>
      </div>

      {/* Bottom Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Property Metrics */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Key Metrics</h2>
          <PropertyMetrics />
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Recent Activity</h2>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;