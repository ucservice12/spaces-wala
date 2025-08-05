import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  User, X, Home, Search, Star, ChevronRight, ChevronDown, HelpCircle, Download, CreditCard, Lightbulb, Shield, Bell, CheckCircle, PhoneCall, Building, Newspaper, BarChart, FileText, Briefcase, LandPlot, Eye, Folder, BookOpen, Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';


// Placeholder data for the Recent Searches section
const recentSearches = [
  { id: 1, label: 'Buy, Wakad ,Any BHK, Any Price' },
  { id: 2, label: 'Buy, Ravet ,Any BHK, Any Price' },
];

const sidebarMenuItems = [
  { id: 'zero-brokerage', icon: <Home />, label: 'Zero Brokerage Properties', hasSubmenu: false },
  { id: 'transactions', icon: <CreditCard />, label: 'My Transactions', hasSubmenu: false },
  { id: 'reviews', icon: <Star />, label: 'My Reviews', badge: 'NEW', hasSubmenu: false },
  {
    id: 'quick-links',
    icon: <Search />,
    label: 'Quick Links',
    hasSubmenu: true,
    submenuItems: [
      { id: 'ql-home', icon: <Home />, label: 'Home' },
      { id: 'ql-post', icon: <FileText />, label: 'Post Properties' },
      { id: 'ql-news', icon: <Newspaper />, label: 'News' },
      { id: 'ql-research', icon: <BarChart />, label: 'Research' },
      { id: 'ql-pay', icon: <CreditCard />, label: 'Pay on Credit' },
      { id: 'ql-protect', icon: <Shield />, label: 'SpacesWala Protect', badge: 'NEW' },
    ],
  },
  {
    id: 'residential',
    icon: <Home />,
    label: 'Residential Packages',
    hasSubmenu: true,
    submenuItems: [
      { id: 'rp-developers', icon: <User />, label: 'For Developers' },
      { id: 'rp-brokers', icon: <Briefcase />, label: 'For Brokers' },
      { id: 'rp-owners', icon: <User />, label: 'For Owners' },
      { id: 'rp-premium', icon: <Star />, label: 'SpacesWala Premium' },
    ],
  },
  {
    id: 'SpacesWala-edge',
    icon: <Lightbulb />,
    label: 'SpacesWala Edge',
    hasSubmenu: true,
    submenuItems: [
      { id: 'he-credit', icon: <CreditCard />, label: 'Pay on Credit' },
      { id: 'he-premium', icon: <Star />, label: 'SpacesWala Premium' },
      { id: 'he-loans', icon: <Home />, label: 'Home Loans' },
      { id: 'he-protect', icon: <Shield />, label: 'SpacesWala Protect', badge: 'NEW' },
      { id: 'he-rent', icon: <FileText />, label: 'Rent Receipt...' },
    ],
  },
  {
    id: 'services',
    icon: <Shield />,
    label: 'Services',
    hasSubmenu: true,
    submenuItems: [
      { id: 's-buy', icon: <Home />, label: 'Buy Properties' },
      { id: 's-rent', icon: <Home />, label: 'Rent Properties' },
      { id: 's-pg', icon: <Users />, label: 'PG/Co-Living' },
      { id: 's-applyloan', icon: <CreditCard />, label: 'Apply for Home Loan' },
      { id: 's-emi', icon: <BarChart />, label: 'EMI Calculator' },
      { id: 's-value', icon: <Star />, label: 'Property Value' },
    ],
  },
  { id: 'SpacesWala-advice', icon: <Lightbulb />, label: 'SpacesWala Advice', hasSubmenu: true, submenuItems: [{ id: 'ha-buying', icon: <BookOpen />, label: 'Buying Guide' }] },
];

const bottomMenuItems = [
  { id: 'unsubscribe', icon: <Bell />, label: 'Unsubscribe Alerts' },
  { id: 'fraud', icon: <Shield />, label: 'Report a Fraud' },
];

const UserSidebar = ({ toggleSidebar, isSidebarOpen }) => {
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeActivity, setActiveActivity] = useState('contacted-properties');
  const navigate = useNavigate();

  const toggleMenu = (menuId) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };
  const handleLogin = () => {
    toggleSidebar();
    navigate('/login');
  };
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '100%' },
  };

  const backdropVariants = {
    open: { opacity: 1, display: 'block' },
    closed: { opacity: 0, transitionEnd: { display: 'none' } },
  };

  const renderActivityContent = () => {
    switch (activeActivity) {
      case 'seen-properties':
        return (
          <div className="flex flex-col items-center p-6">
            <img
              src="https://c.SpacesWalacdn.com/demand/s/client/common/assets/fallback.3b935c39.svg"
              alt="Start new search illustration"
              className="w-full md:w-2/3 mb-6"
            />
            <Button className="w-full bg-purple-100 text-purple-600 hover:bg-purple-200 rounded-lg py-3 font-semibold">
              Start new search
            </Button>
          </div>
        );
      case 'recent-searches':
        return (
          <div className="p-4">
            <ul className="space-y-3">
              {recentSearches.map((search) => (
                <li key={search.id} className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <Search className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">{search.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-gray-800 mt-4 px-3">
              {recentSearches.length} Recent Searches
            </p>
          </div>
        );
      case 'contacted-properties':
      case 'saved-properties':
      default:
        const loginMessage = activeActivity === 'contacted-properties' ? 'view your Recent Activity' : 'save your Recent Activity';
        return (
          <div className="flex flex-col items-center p-6">
            <img
              src="https://c.SpacesWalacdn.com/demand/s/client/common/assets/fallback.3b935c39.svg"
              alt="No activity"
              className="w-full md:w-2/3 mb-6"
            />
            <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 rounded-lg py-3 text-sm flex items-center justify-center">
              Login to {loginMessage}
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        );
    }
  };
  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        initial="closed"
        animate={isSidebarOpen ? 'open' : 'closed'}
        variants={backdropVariants}
        onClick={toggleSidebar}
      />

      <motion.div
        className="fixed top-0 right-0 h-full md:w-[24rem] w-full bg-white shadow-lg z-50 flex flex-col"
        initial="closed"
        animate={isSidebarOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Sidebar Header */}
        <div className="p-4 md:p-6 border-b bg-gradient-to-r from-purple-700 to-purple-900 text-white relative">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-purple-500" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-2xl">Hello 👋</p>
                <div className="mt-2 space-y-1">
                  <p className="flex items-center space-x-2 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Easy Contact with sellers</span>
                  </p>
                  <p className="flex items-center space-x-2 text-sm text-white/90">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Personalized experience</span>
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleLogin}
              className="bg-purple-500 text-white hover:bg-purple-600 px-4 py-2 rounded-md font-semibold text-sm mt-9"
            >
              Login
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-white hover:bg-white/20 p-1 rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* My Activity Section */}
        <div className="p-4 border-b">
          <h3 className="font-semibold text-gray-800 text-lg mb-3">My Activity</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div onClick={() => setActiveActivity('contacted-properties')}>
              <ActivityItem icon={<PhoneCall />} label="Contacted" subLabel="Properties" count="00" highlight={activeActivity === 'contacted-properties'} />
            </div>
            <div onClick={() => setActiveActivity('seen-properties')}>
              <ActivityItem icon={<Eye />} label="Seen" subLabel="Properties" count="00" highlight={activeActivity === 'seen-properties'} />
            </div>
            <div onClick={() => setActiveActivity('saved-properties')}>
              <ActivityItem icon={<Star />} label="Saved" subLabel="Properties" count="00" highlight={activeActivity === 'saved-properties'} />
            </div>
            <div onClick={() => setActiveActivity('recent-searches')}>
              <ActivityItem icon={<Search />} label="Recent" subLabel="Searches" count="02" highlight={activeActivity === 'recent-searches'} />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pb-4">
          {renderActivityContent()}

          <nav className="p-4 space-y-1">
            {sidebarMenuItems.map((item) => (
              <div key={item.id}>
                <div
                  className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors"
                  onClick={() => {
                    if (item.id === 'reviews') {
                      toggleSidebar();
                      navigate('/dashboard/my-reviews');
                    } else if (item.hasSubmenu) {
                      toggleMenu(item.id);
                    }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    {React.cloneElement(item.icon, { className: 'w-5 h-5 text-purple-600' })}
                    <span className="text-gray-700 font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.hasSubmenu && (
                    expandedMenus[item.id] ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    )
                  )}
                </div>
                {item.hasSubmenu && expandedMenus[item.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-8 my-2 border-l border-gray-200"
                  >
                    {item.submenuItems.map((subItem, index) => (
                      <div
                        key={index}
                        className="py-2 px-4 hover:bg-gray-100 rounded-r-lg cursor-pointer text-sm text-gray-600 transition-colors flex items-center space-x-2"
                      >
                        {subItem.icon && React.cloneElement(subItem.icon, { className: 'w-4 h-4' })}
                        <span>{subItem.label}</span>
                        {subItem.badge && (
                          <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                            {subItem.badge}
                          </span>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            {bottomMenuItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  {React.cloneElement(item.icon, { className: 'w-5 h-5 text-gray-600' })}
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-200">
          <Button className="w-full bg-purple-50 text-purple-600 hover:bg-purple-100 rounded-lg py-3 text-sm flex items-center justify-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </Button>
        </div>
      </motion.div>
    </>
  );
};

const ActivityItem = ({ icon, label, subLabel, count, highlight }) => (
  <div className={`flex flex-col items-center p-1 rounded-md transition-colors border 
    ${highlight ? 'bg-purple-100 border-purple-500' : 'bg-gray-100 border-gray-200'} 
    cursor-pointer h-[94px] w-[80px]`}>
    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 
      ${highlight ? 'bg-purple-200' : 'bg-gray-200'}`}>
      {React.cloneElement(icon, {
        className: `w-5 h-5 ${highlight ? 'text-purple-600' : 'text-gray-600'}`
      })}
    </div>
    <p className={`text-xs font-semibold text-center leading-tight ${highlight ? 'text-purple-700' : 'text-gray-600'}`}>{label}</p>
    <p className={`text-xs font-semibold text-center leading-tight ${highlight ? 'text-purple-700' : 'text-gray-600'}`}>{subLabel}</p>
    <p className={`text-sm font-bold mt-1 ${highlight ? 'text-purple-700' : 'text-gray-800'}`}>{count}</p>
  </div>
);

export default UserSidebar;