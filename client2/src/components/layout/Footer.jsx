import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Testimonials', to: '/testimonials' },
    ],
  },
  {
    title: 'Property Types',
    links: [
      { label: 'Apartments', to: '/search?type=apartment' },
      { label: 'Villas', to: '/search?type=villa' },
      { label: 'Plots', to: '/search?type=plot' },
      { label: 'Commercial Properties', to: '/search?type=commercial' },
      { label: 'PG & Co-living', to: '/search?type=pg' },
      { label: 'Luxury Homes', to: '/search?type=villa' }, // reuse or separate path if needed
    ],
  },
  {
    title: 'Top Cities',
    links: [
      { label: 'Mumbai', to: '/search?city=mumbai' },
      { label: 'Delhi', to: '/search?city=delhi' },
      { label: 'Bangalore', to: '/search?city=bangalore' },
      { label: 'Pune', to: '/search?city=pune' },
      { label: 'Hyderabad', to: '/search?city=hyderabad' },
      { label: 'Chennai', to: '/search?city=chennai' },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Instagram, href: 'https://instagram.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
  { icon: Youtube, href: 'https://youtube.com' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dynamic Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-4">
              SpacesWala.com, Locon Solutions Private Limited<br />
              Building A, 5th Floor<br />
              Unitech Business Park, Block - B<br />
              South City 1, Gurugram, India
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Phone:</strong> 1800 41 99099<br />
              <strong>Email:</strong> support@spaceswala.com
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">
                <span className="text-blue-400">spaceswala</span>
                <span className="text-gray-300">.com</span>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} spaceswala.com. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
