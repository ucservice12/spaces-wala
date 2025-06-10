import { NavLink } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import {
  Home,
  Building2,
  Users,
  Headphones,
  Calendar,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Home size={20} /> },
    { name: 'Properties', path: '/properties', icon: <Building2 size={20} /> },
    { name: 'Users', path: '/users', icon: <Users size={20} /> },
    { name: 'Leads', path: '/leads', icon: <Headphones size={20} /> },
    { name: 'Bookings', path: '/bookings', icon: <Calendar size={20} /> },
    { name: 'Content', path: '/content', icon: <FileText size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-primary-900 text-white transition-all duration-300 ease-in-out 
      ${sidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}
      style={{ backgroundColor: '#0D47A1' }}
    >
      {/* Logo & Toggle */}
      <div className="flex items-center justify-between px-4 h-16 border-b border-primary-700">
        <div className="flex items-center">
          {sidebarOpen && (
            <span className="text-xl font-bold tracking-wider ml-2">Housing Admin</span>
          )}
          {!sidebarOpen && <Building2 size={28} className="mx-auto" />}
        </div>
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-primary-200 focus:outline-none p-1"
        >
          {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 ${isActive
                    ? 'bg-primary-800 text-white'
                    : 'text-primary-100 hover:bg-primary-800'}`
                }
              >
                <span className={`${sidebarOpen ? 'mr-3' : 'mx-auto'}`}>{item.icon}</span>
                {sidebarOpen && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-primary-700">
        <button
          onClick={() => {
            localStorage.removeItem('isAuthenticated');
            window.location.href = '/login';
          }}
          className={`flex items-center ${sidebarOpen ? 'w-full' : 'justify-center'} 
            px-4 py-2 text-primary-100 hover:bg-primary-800 rounded`}
        >
          <LogOut size={20} className={sidebarOpen ? 'mr-3' : ''} />
          {sidebarOpen && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;