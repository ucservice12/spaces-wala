import React from 'react';
import { Settings as SettingsIcon, Save, Bell, Lock, Globe, Palette, Database } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const Settings = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        subtitle="Manage your application preferences"
        icon={<SettingsIcon size={24} />}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {/* General Settings */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">General Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Platform Name
                  </label>
                  <input
                    type="text"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    defaultValue="Housing Admin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    defaultValue="admin@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Zone
                  </label>
                  <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500">
                    <option>UTC</option>
                    <option>Eastern Time</option>
                    <option>Pacific Time</option>
                    <option>Central Time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive updates via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Push Notifications</h3>
                    <p className="text-sm text-gray-500">Receive browser notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Settings */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Settings</h2>
              <nav className="space-y-2">
                <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                  <Bell className="h-5 w-5 text-gray-400 mr-3" />
                  Notifications
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                  <Lock className="h-5 w-5 text-gray-400 mr-3" />
                  Security
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                  <Globe className="h-5 w-5 text-gray-400 mr-3" />
                  Language
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                  <Palette className="h-5 w-5 text-gray-400 mr-3" />
                  Appearance
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50">
                  <Database className="h-5 w-5 text-gray-400 mr-3" />
                  Backup
                </a>
              </nav>
            </div>
          </div>

          <div className="bg-primary-50 rounded-lg p-6">
            <h3 className="text-sm font-medium text-primary-900 mb-2">Need help with settings?</h3>
            <p className="text-sm text-primary-700 mb-4">Check our documentation for detailed information about configuring your dashboard.</p>
            <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-800">
              View Documentation →
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg flex items-center transition duration-200">
          <Save size={18} className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;