import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useAppContext } from '../../context/AppContext';

const MainLayout = () => {
  const { sidebarOpen } = useAppContext();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'}`}>
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
        <footer className="py-4 px-6 bg-white border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Housing Admin Dashboard. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;