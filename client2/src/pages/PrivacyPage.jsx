import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const PrivacyPage = () => {
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
            <span className="text-gray-700">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              At SpacesWala.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">1. Information We Collect</h2>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Personal Information</h3>
            <p className="text-gray-600 mb-4">
              We may collect personal information that you provide directly to us, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Name and contact information</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and payment information</li>
              <li>Property preferences and search history</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-800 mb-2">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Access times and pages viewed</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you marketing and promotional communications</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze how you use our services</li>
              <li>Improve our services</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Service providers and business partners</li>
              <li>Law enforcement when required by law</li>
              <li>Other users when you explicitly consent</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your information. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to remove that information.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-600">
                SpacesWala.com<br />
                Locon Solutions Private Limited<br />
                Building A, 5th Floor<br />
                Unitech Business Park, Block - B<br />
                South City 1, Gurugram, India<br />
                Email: privacy@SpacesWala.com
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

export default PrivacyPage;