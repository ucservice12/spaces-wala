import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Card } from "@/components/ui/card";
import {
  TypographyMuted,
  TypographyH3,
  TypographyP
} from '@/custom/Typography';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const termsSections = [
  {
    heading: "1. Acceptance of Terms",
    content: `By accessing and using spaceswala.com, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.`,
  },
  {
    heading: "2. Use of Service",
    content: `You agree to use the services only for purposes that are permitted by these Terms and any applicable law or regulation. Unauthorized use may give rise to a claim for damages and/or be a criminal offense.`,
  },
  {
    heading: "3. User Conduct",
    list: [
      "You must not misuse this service.",
      "You must not attempt to gain unauthorized access to our system.",
      "You must not engage in any activity that interferes with the services.",
    ],
  },
  {
    heading: "4. Intellectual Property",
    content: `All content provided on this website, including text, images, and logo, is the property of Locon Solutions Private Limited unless otherwise stated.`,
  },
  {
    heading: "5. Termination",
    content: `We reserve the right to suspend or terminate access to our service immediately if you breach any of these Terms.`,
  },
  {
    heading: "6. Limitation of Liability",
    content: `We will not be liable for any indirect, incidental, special or consequential damages resulting from the use or the inability to use our service.`,
  },
  {
    heading: "7. Changes to the Terms",
    content: `We may update these Terms from time to time. Continued use of the site after any changes constitutes your acceptance of the new Terms.`,
  },
  {
    heading: "8. Contact Us",
    content: "If you have any questions about these Terms, you can contact us at:",
    customElement: (
      <div className="bg-gray-50 p-4 rounded-md">
        <p className="text-gray-600">
          spaceswala.com<br />
          Locon Solutions Private Limited<br />
          Unitech Business Park, Gurugram, India<br />
          Email: support@spaceswala.com
        </p>
      </div>
    ),
  },
];

const TermsPage = () => {
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
              <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Card className="max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>

          <div className="prose max-w-none">
            {termsSections.map((section, idx) => (
              <div key={idx}>
                <TypographyH3 className="tracking-normal mb-4">{section.heading}</TypographyH3>

                {section.content && (
                  <TypographyP className="mb-4">{section.content}</TypographyP>
                )}

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

export default TermsPage;
