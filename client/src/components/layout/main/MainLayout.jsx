import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />

            {/*  Share menu stays fixed on screen */}
        </div>
    );
};

export default MainLayout;
