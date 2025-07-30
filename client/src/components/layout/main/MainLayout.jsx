import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';
import RadialShareMenu from '@/custom/RadialShareMenu';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />

            {/* 📌 Share menu stays fixed on screen */}
            {/* <div className="fixed bottom-6 left-6 z-50"> */}
            <RadialShareMenu />
            {/* </div> */}
        </div>
    );
};

export default MainLayout;
