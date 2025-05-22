import { Home } from 'lucide-react';
import { Card } from "@/components/ui/card"
import {
  TypographyMuted,
  TypographyH3,
  TypographyP,
} from '@/custom/Typography';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const privacySections = [
  {
    heading: "1. Information We Collect",
    subsections: [
      {
        title: "Personal Information",
        content: "We may collect personal information that you provide directly to us, including but not limited to:",
        list: [
          "Name and contact information",
          "Email address",
          "Phone number",
          "Billing and payment information",
          "Property preferences and search history",
        ],
      },
      {
        title: "Automatically Collected Information",
        content: "When you visit our website, we automatically collect certain information about your device, including:",
        list: [
          "IP address",
          "Browser type",
          "Operating system",
          "Access times and pages viewed",
          "Referring website addresses",
        ],
      },
    ],
  },
  {
    heading: "2. How We Use Your Information",
    content: "We use the information we collect to:",
    list: [
      "Provide and maintain our services",
      "Process your transactions",
      "Send you marketing and promotional communications",
      "Respond to your comments and questions",
      "Analyze how you use our services",
      "Improve our services",
    ],
  },
  {
    heading: "3. Information Sharing and Disclosure",
    content: "We may share your information with:",
    list: [
      "Service providers and business partners",
      "Law enforcement when required by law",
      "Other users when you explicitly consent",
    ],
  },
  {
    heading: "4. Data Security",
    content:
      "We implement appropriate technical and organizational security measures to protect your information. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.",
  },
  {
    heading: "5. Your Rights",
    content: "You have the right to:",
    list: [
      "Access your personal information",
      "Correct inaccurate information",
      "Request deletion of your information",
      "Object to processing of your information",
      "Withdraw consent",
    ],
  },
  {
    heading: "6. Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
  },
  {
    heading: "7. Children's Privacy",
    content:
      "Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to remove that information.",
  },
  {
    heading: "8. Changes to This Privacy Policy",
    content:
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
  },
  {
    heading: "9. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at:",
    customElement: (
      <div className="bg-gray-50 p-4 rounded-md">
        <p className="text-gray-600">
          spaceswala.com<br />
          Locon Solutions Private Limited<br />
          Building A, 5th Floor<br />
          Unitech Business Park, Block - B<br />
          South City 1, Gurugram, India<br />
          Email: privacy@spaceswala.com
        </p>
      </div>
    ),
  },
];

const PrivacyPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto p-4 border-b">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1">
                <Home size={14} /> Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Card className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              At spaceswala.com, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            {privacySections.map((section, idx) => (
              <div key={idx}>
                <TypographyH3 className="tracking-normal mb-4"> {section?.heading}</TypographyH3>

                {section.subsections?.map((sub, i) => (
                  <div key={i}>
                    <TypographyH3 className="tracking-normal">{sub?.title}</TypographyH3>
                    <TypographyP className="my-2">
                      {sub?.content}
                    </TypographyP>
                    {sub.list && (
                      <ul className="list-disc pl-6 mb-4 text-gray-600">
                        {sub.list.map((item, liIdx) => (
                          <li key={liIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.content && <p className="text-gray-600 mb-4">{section.content}</p>}

                {section.list && (
                  <ul className="list-disc pl-6 mb-4 text-gray-600">
                    {section.list.map((item, liIdx) => (
                      <li key={liIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.customElement}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <TypographyMuted>Last updated: May 22, 2025</TypographyMuted>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPage;
