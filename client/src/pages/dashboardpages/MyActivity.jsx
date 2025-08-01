import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageCircle,
    Eye,
    Heart,
    Search,
    Home,
    Building2,
    Plus,
    ChevronRight
} from 'lucide-react';

const MyActivity = () => {
    const [activeTab, setActiveTab] = useState('contacted');
    const [selectedFilter, setSelectedFilter] = useState('buy');

    const mockProperties = {
        contacted: { buy: [], rent: [], commercial: [] },
        seen: { buy: [], rent: [], commercial: [] },
        saved: { buy: [], rent: [], commercial: [] },
        recent: { buy: [], rent: [], commercial: [] },
    };

    const tabs = [
        {
            id: 'contacted',
            label: 'Contacted',
            icon: MessageCircle,
            count: mockProperties.contacted[selectedFilter]?.length || 0,
        },
        {
            id: 'seen',
            label: 'Viewed',
            icon: Eye,
            count: mockProperties.seen[selectedFilter]?.length || 0,
        },
        {
            id: 'saved',
            label: 'Saved',
            icon: Heart,
            count: mockProperties.saved[selectedFilter]?.length || 0,
        },
        {
            id: 'recent',
            label: 'Searches',
            icon: Search,
            count: mockProperties.recent[selectedFilter]?.length || 0,
        },
    ];

    const filters = [
        { id: 'buy', label: 'Buy', icon: Home },
        { id: 'rent', label: 'Rent', icon: Home },
        { id: 'commercial', label: 'Commercial', icon: Building2 },
    ];

    const getEmptyStateMessage = () => {
        const messages = {
            contacted: 'You haven\'t contacted any properties yet',
            seen: 'No recently viewed properties',
            saved: 'No saved properties found',
            recent: 'No recent searches',
        };
        return messages[activeTab];
    };

    return (
        <div className="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
                    >
                        My Activity
                    </motion.h1>
                    <p className="text-gray-500 text-sm">Track your property interactions and searches</p>
                </div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
                >
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;

                        return (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`relative p-4 rounded-xl transition-all duration-200 ${isActive ? 'bg-white shadow-md border border-gray-100' : 'bg-white/70 hover:bg-white border border-gray-100/70'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${isActive ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-600'}`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="text-left">
                                        <h3 className={`text-sm font-medium ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                                            {tab.label}
                                        </h3>
                                        <span className={`text-lg font-bold ${isActive ? 'text-purple-600' : 'text-gray-900'}`}>
                                            {String(tab.count).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeTabIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500 rounded-b-xl"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by</h3>
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => {
                            const Icon = filter.icon;
                            const isActive = selectedFilter === filter.id;
                            
                            return (
                                <motion.button
                                    key={filter.id}
                                    onClick={() => setSelectedFilter(filter.id)}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${isActive ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {filter.label}
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Empty State */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeTab}-${selectedFilter}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                    >
                        <div className="text-center py-8">
                            <div className="mx-auto w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mb-4">
                                {activeTab === 'contacted' && <MessageCircle className="w-8 h-8 text-purple-400" />}
                                {activeTab === 'seen' && <Eye className="w-8 h-8 text-purple-400" />}
                                {activeTab === 'saved' && <Heart className="w-8 h-8 text-purple-400" />}
                                {activeTab === 'recent' && <Search className="w-8 h-8 text-purple-400" />}
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {getEmptyStateMessage()}
                            </h3>
                            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
                                {activeTab === 'contacted' && 'Start contacting properties to see them here'}
                                {activeTab === 'seen' && 'Properties you view will appear here'}
                                {activeTab === 'saved' && 'Save properties to easily find them later'}
                                {activeTab === 'recent' && 'Your recent searches will appear here'}
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white border border-gray-200 rounded-xl p-5 w-full max-w-sm cursor-pointer hover:border-purple-200 hover:shadow-sm transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <Search className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-medium text-gray-900">Find properties</h4>
                                            <p className="text-sm text-gray-500">Browse our listings</p>
                                        </div>
                                        <div className="ml-auto text-gray-400">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-white border border-gray-200 rounded-xl p-5 w-full max-w-sm cursor-pointer hover:border-orange-200 hover:shadow-sm transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                            <Plus className="w-5 h-5 text-orange-600" />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-medium text-gray-900">List your property</h4>
                                            <p className="text-sm text-gray-500">It's free and easy</p>
                                        </div>
                                        <div className="ml-auto text-gray-400">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MyActivity;