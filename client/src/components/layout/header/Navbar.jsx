// "use client";

// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, ChevronDown, CircleUserRound } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { TypographyP, TypographySmall } from '@/custom/Typography';
// import { useSelector } from 'react-redux';

// import {
//   Home,
//   Building2,
//   MapPin,
//   Bed,
//   DollarSign,
//   Newspaper,
//   BookOpen,
//   Tag
// } from 'lucide-react';

// const categoryImages = {
//   apartment: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop",
//   house: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&auto=format&fit=crop",
//   plot: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop",
//   pg: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop",
//   "post-property": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&auto=format&fit=crop",
//   pricing: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop",
//   services: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop",
//   "home-loans": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&auto=format&fit=crop",
//   "property-news": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&auto=format&fit=crop",
//   guides: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop"
// };

// const menuItems = [
//   {
//     label: 'Buy',
//     links: [
//       { to: '/search?type=buy&category=apartment', label: 'Apartments', icon: Building2, image: categoryImages.apartment },
//       { to: '/search?type=buy&category=house', label: 'Houses', icon: Home, image: categoryImages.house },
//       { to: '/search?type=buy&category=plot', label: 'Plots', icon: MapPin, image: categoryImages.plot },
//     ],
//   },
//   {
//     label: 'Rent',
//     links: [
//       { to: '/search?type=rent&category=apartment', label: 'Apartments', icon: Building2, image: categoryImages.apartment },
//       { to: '/search?type=rent&category=house', label: 'Houses', icon: Home, image: categoryImages.house },
//       { to: '/search?type=rent&category=pg', label: 'PG/Co-living', icon: Bed, image: categoryImages.pg },
//     ],
//   },
//   {
//     label: 'Sell',
//     links: [
//       { to: '/seller/post-property', label: 'Post Property', icon: Tag, image: categoryImages["post-property"] },
//       { to: '/sell/pricing', label: 'Pricing', icon: DollarSign, image: categoryImages.pricing },
//       { to: '/sell/services', label: 'Services', icon: Bed, image: categoryImages.services },
//     ],
//   },
//   {
//     label: 'Resources',
//     links: [
//       { to: '/resources/home-loans', label: 'Home Loans', icon: DollarSign, image: categoryImages["home-loans"] },
//       { to: '/resources/property-news', label: 'Property News', icon: Newspaper, image: categoryImages["property-news"] },
//       { to: '/resources/guides', label: "Buyer's Guide", icon: BookOpen, image: categoryImages.guides },
//     ],
//   },
// ];

// const DesktopNavbar = ({ isScrolled, hoveredIndex, setHoveredIndex, user }) => {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   return (
//     <>
//       <div className="hidden md:flex items-center space-x-8">
//         {menuItems.map((menu, index) => (
//           <div
//             key={menu.label}
//             className="relative"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <button className="flex items-center font-medium">
//               <TypographyP className={`flex items-center gap-2 text-lg ${isScrolled || !isHomePage ? 'text-black' : 'text-white'}`}>
//                 {menu.label}
//                 <ChevronDown />
//               </TypographyP>
//             </button>

//             {hoveredIndex === index && (
//               <div className="absolute top-full left-full w-fullg-white shadow-lg border-t z-50">
//                 <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-3 gap-8">
//                   {menu.links.map((link) => (
//                     <Link key={link.to} to={link.to} className="group p-4 rounded-lg hover:bg-blue-50">
//                       <div className="flex gap-4 items-start">
//                         <link.icon className="w-6 h-6 text-gray-700 mt-1" />
//                         <div>
//                           <TypographySmall className="font-semibold text-gray-800 mb-1">{link.label}</TypographySmall>
//                           <p className="text-sm text-gray-500">Explore {link.label.toLowerCase()} options</p>
//                         </div>
//                       </div>
//                       {link.image && (
//                         <img src={link.image} alt={link.label} className="w-full h-32 object-cover rounded-lg mt-4" />
//                       )}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="hidden md:flex items-center space-x-4">
//         {user ? (
//           <Link to="/dashboard/profile">
//             <Button size="sm" className="flex items-center gap-2">
//               <CircleUserRound className="h-4 w-4" />
//               Profile
//             </Button>
//           </Link>
//         ) : (
//           <Link to="/login">
//             <Button size="sm">Login</Button>
//           </Link>
//         )}
//       </div>
//     </>
//   );
// };

// const MobileNavbar = ({ isMobileMenuOpen, toggleMobileMenu, activeMobileDropdown, toggleMobileDropdown, user }) => (
//   <>
//     {isMobileMenuOpen && (
//       <div className="md:hidden fixed top-20 left-0 right-0 z-50 bg-white shadow-lg p-4">
//         <div className="flex flex-col space-y-4">
//           {menuItems.map((menu) => (
//             <div key={menu.label}>
//               <button
//                 onClick={() => toggleMobileDropdown(menu.label)}
//                 className="flex justify-between w-full py-3 px-2 font-medium text-gray-800 items-center"
//               >
//                 <TypographyP className="mb-0">{menu.label}</TypographyP>
//                 <ChevronDown className={`h-5 w-5 transition-transform ${activeMobileDropdown === menu.label ? 'rotate-180' : ''}`} />
//               </button>
//               {activeMobileDropdown === menu.label && (
//                 <div className="pl-4 mt-1 space-y-2 border-l-2 border-blue-200">
//                   {menu.links.map((link) => (
//                     <Link
//                       key={link.to}
//                       to={link.to}
//                       onClick={toggleMobileMenu}
//                       className="block py-2 px-3 hover:bg-blue-50 rounded"
//                     >
//                       <div className="flex items-center gap-3">
//                         <link.icon className="w-5 h-5 text-gray-600" />
//                         <TypographySmall>{link.label}</TypographySmall>
//                       </div>
//                       {link.image && (
//                         <div className="mt-2 ml-8">
//                           <img src={link.image} alt={link.label} className="w-full h-24 object-cover rounded-lg" />
//                         </div>
//                       )}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           <div className="pt-4">
//             {user ? (
//               <Link to="/dashboard/profile" onClick={toggleMobileMenu}>
//                 <Button className="w-full flex items-center gap-2">
//                   <CircleUserRound className="h-4 w-4" />
//                   Profile
//                 </Button>
//               </Link>
//             ) : (
//               <Link to="/login" onClick={toggleMobileMenu}>
//                 <Button className="w-full">Login</Button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     )}
//   </>
// );

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     if (isMobileMenuOpen) setActiveMobileDropdown(null);
//   };

//   const toggleMobileDropdown = (label) => {
//     setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
//   };

//   return (
//     <>
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={toggleMobileMenu} />
//       )}
//       <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage || hoveredIndex !== null ? 'bg-white' : 'bg-transparent sm:py-4'}`}>
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <Link to="/">
//               <img src="/logo.png" alt="logo" className="sm:h-24 h-20" />
//             </Link>

//             <DesktopNavbar
//               isScrolled={isScrolled}
//               hoveredIndex={hoveredIndex}
//               setHoveredIndex={setHoveredIndex}
//               user={user}
//             />

//             <button className="md:hidden p-2" onClick={toggleMobileMenu}>
//               {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         <MobileNavbar
//           isMobileMenuOpen={isMobileMenuOpen}
//           toggleMobileMenu={toggleMobileMenu}
//           activeMobileDropdown={activeMobileDropdown}
//           toggleMobileDropdown={toggleMobileDropdown}
//           user={user}
//         />
//       </div>
//     </>
//   );
// };

// export default Navbar;


import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {

    return (
        <>
            <div className="flex md:hidden">
                <NavbarMobile
                />
            </div>
            <div className="hidden md:block">
                <NavbarDesktop
                />
            </div>
        </>
    )
};

export default Navbar;
