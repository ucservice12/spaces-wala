import React from 'react';
import { FileText, Plus, Search, Filter } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const Content = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Content Management"
        subtitle="Manage your website content and blog posts"
        icon={<FileText size={24} />}
        actions={
          <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg flex items-center transition duration-200">
            <Plus size={18} className="mr-1" />
            Add New Post
          </button>
        }
      />

      <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search content..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        <div className="relative w-full sm:w-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter size={18} className="text-gray-400" />
          </div>
          <select
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none"
          >
            <option value="all">All Categories</option>
            <option value="blog">Blog Posts</option>
            <option value="news">News</option>
            <option value="announcements">Announcements</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="text-center py-12">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No content yet</h3>
            <p className="text-gray-500 mb-6">Get started by creating your first piece of content</p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg inline-flex items-center transition duration-200">
              <Plus size={18} className="mr-1" />
              Create Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;