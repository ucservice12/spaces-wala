import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const TermsPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 flex items-center">
              <Home size={14} className="mr-1" /> Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Welcome to SpacesWala.com. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using SpacesWala.com, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using SpacesWala.com's services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-4">
              SpacesWala.com provides users with access to real estate listings, information, and various real estate-related services. Unless explicitly stated otherwise, any new features that augment or enhance the current service shall be subject to these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. User Account and Security</h2>
            <p className="text-gray-600 mb-4">
              Some services on SpacesWala.com require registration. You agree to provide accurate and complete information when creating an account and to update this information to maintain its accuracy.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our service, you agree to our Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. User Conduct</h2>
            <p className="text-gray-600 mb-4">
              You agree not to use the service for any unlawful purpose or in any way that interrupts, damages, or impairs the service. You may not use any automated means or form of scraping or data extraction to access, query, or otherwise collect information from the service.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Property Listings</h2>
            <p className="text-gray-600 mb-4">
              All property listings on SpacesWala.com must be accurate and up-to-date. Users posting listings agree to ensure all information is correct and to update listings as necessary.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-4">
              The content, organization, graphics, design, and other matters related to SpacesWala.com are protected under applicable copyrights, trademarks, and other proprietary rights.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              SpacesWala.com shall not be liable for any damages arising out of or in connection with the use or inability to use the service, including but not limited to direct, indirect, incidental, special, or consequential damages.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              SpacesWala.com reserves the right to modify these terms at any time. We will notify users of any changes by posting the new terms on the site. Continued use of the service after such modifications constitutes acceptance of the new terms.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">10. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">
                SpacesWala.com<br />
                Locon Solutions Private Limited<br />
                Building A, 5th Floor<br />
                Unitech Business Park, Block - B<br />
                South City 1, Gurugram, India<br />
                Email: legal@SpacesWala.com
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Last updated: March 15, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;