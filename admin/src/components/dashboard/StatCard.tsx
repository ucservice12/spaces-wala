import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  icon,
  color 
}) => {
  const isPositive = change >= 0;
  
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-blue-600';
      case 'green':
        return 'bg-green-50 text-green-600';
      case 'purple':
        return 'bg-purple-50 text-purple-600';
      case 'orange':
        return 'bg-orange-50 text-orange-600';
      case 'red':
        return 'bg-red-50 text-red-600';
      default:
        return 'bg-blue-50 text-blue-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 transition duration-300 hover:shadow-md">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1 text-gray-800">{value}</p>
        </div>
        <div className={`rounded-full p-2 ${getColorClasses()}`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        {isPositive ? (
          <ArrowUp size={16} className="text-green-500 mr-1" />
        ) : (
          <ArrowDown size={16} className="text-red-500 mr-1" />
        )}
        <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {Math.abs(change)}%
        </span>
        <span className="text-sm text-gray-500 ml-1">from last month</span>
      </div>
    </div>
  );
};

export default StatCard;