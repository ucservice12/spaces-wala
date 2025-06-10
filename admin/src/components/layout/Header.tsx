import { useAppContext } from '../../context/AppContext';
import { 
  Search, 
  Menu,
  User
} from 'lucide-react';
import NotificationDropdown from '../common/NotificationDropdown';

const Header = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Mobile menu button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <Menu size={24} />
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center flex-1 max-w-lg mx-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search properties, users, etc..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 
                        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-3">
          {/* Mobile search button */}
          <button className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
            <Search size={20} />
          </button>
          
          {/* Notifications */}
          <NotificationDropdown />
          
          {/* User Profile */}
          <div className="flex items-center">
            <button className="flex items-center space-x-2 focus:outline-none">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User size={16} className="text-gray-600" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;