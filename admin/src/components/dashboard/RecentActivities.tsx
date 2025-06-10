import {
  Home,
  User,
  DollarSign,
  Check,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { format } from 'date-fns';

const activities = [
  {
    id: 1,
    action: 'New property listed',
    description: 'Luxury apartment in Downtown',
    time: new Date(Date.now() - 25 * 60000),
    icon: <Home size={16} />,
    color: 'blue'
  },
  {
    id: 2,
    action: 'New user registered',
    description: 'John Smith joined as an agent',
    time: new Date(Date.now() - 120 * 60000),
    icon: <User size={16} />,
    color: 'green'
  },
  {
    id: 3,
    action: 'Payment received',
    description: '$2,500 from Premium Listing',
    time: new Date(Date.now() - 240 * 60000),
    icon: <DollarSign size={16} />,
    color: 'purple'
  },
  {
    id: 4,
    action: 'Property verified',
    description: 'Sea View Villa verification completed',
    time: new Date(Date.now() - 480 * 60000),
    icon: <Check size={16} />,
    color: 'teal'
  },
  {
    id: 5,
    action: 'Viewing scheduled',
    description: 'For Parkside Residence on Friday',
    time: new Date(Date.now() - 720 * 60000),
    icon: <Calendar size={16} />,
    color: 'orange'
  },
  {
    id: 6,
    action: 'New inquiry',
    description: 'About Mountain View Apartment',
    time: new Date(Date.now() - 1440 * 60000),
    icon: <MessageSquare size={16} />,
    color: 'red'
  }
];

const getTimeAgo = (time: Date) => {
  const minutes = Math.floor((Date.now() - time.getTime()) / 60000);

  if (minutes < 60) {
    return `${minutes} min ago`;
  } else if (minutes < 1440) {
    return `${Math.floor(minutes / 60)} hr ago`;
  } else {
    return format(time, 'MMM d');
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-100 text-blue-600';
    case 'green':
      return 'bg-green-100 text-green-600';
    case 'purple':
      return 'bg-purple-100 text-purple-600';
    case 'teal':
      return 'bg-teal-100 text-teal-600';
    case 'orange':
      return 'bg-orange-100 text-orange-600';
    case 'red':
      return 'bg-red-100 text-red-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

const RecentActivities = () => {
  return (
    <div className="space-y-4">
      <div className="overflow-y-auto max-h-[350px] pr-2">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start mb-4 last:mb-0">
            <div className={`rounded-full p-2 mr-3 ${getColorClasses(activity.color)}`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{activity.action}</p>
              <p className="text-xs text-gray-500">{activity.description}</p>
            </div>
            <div className="text-xs text-gray-400">
              {getTimeAgo(activity.time)}
            </div>
          </div>
        ))}
      </div>
      <button className="w-full py-2 text-sm text-primary-600 hover:text-primary-800 font-medium">
        View All Activities
      </button>
    </div>
  );
};

export default RecentActivities;