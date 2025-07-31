import React, { useState } from 'react';
import { User, X, Home, Search, Star, ChevronRight, ChevronDown, HelpCircle, Download, CreditCard, Lightbulb, Shield, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Adjust path as needed

const UserSidebar = ({ toggleSidebar, isSidebarOpen }) => {
    const sidebarMenuItems = [
        {
            id: 'zero-brokerage',
            icon: <Home className="w-5 h-5" />,
            label: 'Zero Brokerage Properties',
            hasSubmenu: false
        },
        {
            id: 'transactions',
            icon: <CreditCard className="w-5 h-5" />,
            label: 'My Transactions',
            hasSubmenu: false
        },
        {
            id: 'reviews',
            icon: <Star className="w-5 h-5" />,
            label: 'My Reviews',
            badge: 'NEW',
            hasSubmenu: false
        },
        {
            id: 'quick-links',
            icon: <Search className="w-5 h-5" />,
            label: 'Quick Links',
            hasSubmenu: true
        },
        {
            id: 'residential',
            icon: <Home className="w-5 h-5" />,
            label: 'Residential Packages',
            hasSubmenu: true
        },
        {
            id: 'housing-edge',
            icon: <Lightbulb className="w-5 h-5" />,
            label: 'Housing Edge',
            hasSubmenu: true
        },
        {
            id: 'services',
            icon: <Shield className="w-5 h-5" />,
            label: 'Services',
            hasSubmenu: true
        },
        {
            id: 'alerts',
            icon: <Bell className="w-5 h-5" />,
            label: 'Unsubscribe Alerts',
            hasSubmenu: false
        },
        {
            id: 'fraud',
            icon: <Shield className="w-5 h-5" />,
            label: 'Report a Fraud',
            hasSubmenu: false
        }
    ];

    const [expandedMenus, setExpandedMenus] = useState({});
    const toggleMenu = (menuId) => {
        setExpandedMenus(prev => ({
            ...prev,
            [menuId]: !prev[menuId]
        }));
    };

    return (
        <>
            {/* Backdrop */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full md:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="p-4 border-b bg-gradient-to-r from-purple-700 to-purple-900">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Hello 👋</p>
                                    <div className="flex items-center space-x-1 text-sm text-white/90">
                                        <span>✓ Easy Contact with sellers</span>
                                    </div>
                                    <div className="flex items-center space-x-1 text-sm text-white/90">
                                        <span>✓ Personalized experience</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={toggleSidebar}
                                className="text-white hover:bg-white/20 p-1"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* My Activity Section */}
                    <div className="p-4 border-b">
                        <h3 className="font-semibold text-gray-800 mb-3">My Activity</h3>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
                                    <Home className="w-5 h-5 text-gray-600" />
                                </div>
                                <p className="text-xs text-gray-600">Contacted</p>
                                <p className="text-xs text-gray-600">Properties</p>
                                <p className="text-sm font-semibold">00</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-1">
                                    <Search className="w-5 h-5 text-purple-600" />
                                </div>
                                <p className="text-xs text-gray-600">Seen</p>
                                <p className="text-xs text-gray-600">Properties</p>
                                <p className="text-sm font-semibold text-purple-600">00</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
                                    <Star className="w-5 h-5 text-gray-600" />
                                </div>
                                <p className="text-xs text-gray-600">Saved</p>
                                <p className="text-xs text-gray-600">Properties</p>
                                <p className="text-sm font-semibold">00</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
                                    <Search className="w-5 h-5 text-gray-600" />
                                </div>
                                <p className="text-xs text-gray-600">Recent</p>
                                <p className="text-xs text-gray-600">Searches</p>
                                <p className="text-sm font-semibold">02</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-4">
                            {sidebarMenuItems.map((item) => (
                                <div key={item.id} className="mb-1">
                                    <div
                                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
                                        onClick={() => (item.hasSubmenu ? toggleMenu(item.id) : null)}
                                    >
                                        <div className="flex items-center space-x-3">
                                            {item.icon}
                                            <span className="text-gray-700 group-hover:text-gray-900">
                                                {item.label}
                                            </span>
                                            {item.badge && (
                                                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                        {item.hasSubmenu &&
                                            (expandedMenus[item.id] ? (
                                                <ChevronDown className="w-4 h-4 text-gray-400" />
                                            ) : (
                                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Help Center */}
                        <div className="p-4 border-t">
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <HelpCircle className="w-5 h-5 text-gray-600" />
                                    <span className="text-gray-700">Visit Help Center</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Download App */}
                        <div className="p-4 border-t">
                            <h4 className="font-medium text-gray-800 mb-3">Download Our App</h4>
                            <div className="flex space-x-2 mb-3">
                                <div className="bg-black text-white px-3 py-2 rounded text-xs flex items-center space-x-1">
                                    <Download className="w-4 h-4" />
                                    <span>App Store</span>
                                </div>
                                <div className="bg-black text-white px-3 py-2 rounded text-xs flex items-center space-x-1">
                                    <Download className="w-4 h-4" />
                                    <span>Google Play</span>
                                </div>
                            </div>
                            <div className="w-16 h-16 bg-gray-200 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                                <span className="text-xs text-gray-500">QR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserSidebar;
