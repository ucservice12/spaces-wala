import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CircleUserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypographyP, TypographySmall } from '@/custom/Typography';
import { useSelector } from 'react-redux';

const menuItems = [
  {
    label: 'Buy',
    links: [
      { to: '/search?type=buy&category=apartment', label: 'Apartments' },
      { to: '/search?type=buy&category=house', label: 'Houses' },
      { to: '/search?type=buy&category=plot', label: 'Plots' },
    ],
  },
  {
    label: 'Rent',
    links: [
      { to: '/search?type=rent&category=apartment', label: 'Apartments' },
      { to: '/search?type=rent&category=house', label: 'Houses' },
      { to: '/search?type=rent&category=pg', label: 'PG/Co-living' },
    ],
  },
  {
    label: 'Sell',
    links: [
      { to: '/sell/property', label: 'Post Property' },
      { to: '/sell/pricing', label: 'Pricing' },
      { to: '/sell/services', label: 'Services' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { to: '/resources/home-loans', label: 'Home Loans' },
      { to: '/resources/property-news', label: 'Property News' },
      { to: '/resources/guides', label: "Buyer's Guide" },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { user } = useSelector((state) => state.auth);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMobileDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  };

  const toggleDropdown = (label) => {
    setActiveMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Black backdrop when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
          ? 'bg-white/20 backdrop-blur-md shadow-md'
          : 'bg-transparent sm:py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="relative top-0" onClick={closeMobileMenu}>
              <img src="/logo.png" alt="logo" className="sm:h-24 h-20" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((menu) => (
                <div key={menu?.label} className="relative group">
                  <button
                    className={`flex items-center ${isScrolled || !isHomePage ? 'text-black' : 'text-white'
                      } font-medium`}
                  >
                    <TypographySmall className="flex items-center font-semibold tracking-wide gap-1 mb-0">
                      {menu?.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </TypographySmall>
                  </button>
                  <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md p-4 w-48 space-y-2">
                    {menu.links.map((link) => (
                      <Link key={link.to} to={link.to}>
                        <TypographyP className="block py-1 hover:text-blue-600 mb-0">
                          {link?.label}
                        </TypographyP>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {user ?
                <Link to="/dashboard/profile">

                  <Button size="sm">User<CircleUserRound className='text-white ' strokeWidth={1} /></Button>
                </Link>
                :
                <Link to="/login">
                  <Button size="sm">Login</Button>
                </Link>
              }
              {/* <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link> */}
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden bg-primary rounded-md p-1 text-white z-50" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-20 left-0 right-0 z-50 md:hidden bg-white/20 backdrop-blur-md shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((menu) => (
                <div key={menu.label}>
                  <button
                    onClick={() => toggleDropdown(menu.label)}
                    className="flex justify-between w-full py-2 font-medium text-white"
                  >
                    <TypographyP className="mb-0">{menu.label}</TypographyP>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${activeMobileDropdown === menu.label ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {activeMobileDropdown === menu.label && (
                    <div className="pl-4 mt-1 space-y-2">
                      {menu.links.map((link) => (
                        <Link key={link.to} to={link.to} onClick={closeMobileMenu}>
                          <TypographyP className="block text-gray-200 py-1 mb-0">
                            {`-  ${link?.label}`}
                          </TypographyP>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2 pt-2">
                {user ? (
                  <Link to="/dashboard/profile" onClick={closeMobileMenu}>
                    <Button size="sm" className="w-full flex justify-between items-center">
                      User <CircleUserRound className="ml-2 text-white" strokeWidth={2} />
                    </Button>
                  </Link>
                ) : (
                  <Link to="/login" onClick={closeMobileMenu}>
                    <Button size="sm" className="">Login</Button>
                  </Link>
                )}
                {/* <Link to="/signup" onClick={closeMobileMenu}>
                  <Button variant="outline" className="w-full">
                    <TypographyP>Sign Up</TypographyP>
                  </Button>
                </Link> */}
              </div>

            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
