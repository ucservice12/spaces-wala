import { Paragraph } from "@/custom/Typography";
import NavigateSloter from "@/components/NavigateSloter";

export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl my-26 mx-auto px-6">

            <NavigateSloter img='/assets/privacy.png' headline='SpacesWala Privacy' />

            <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
                Privacy Policy
            </h2>
            <Paragraph>
                Effective Date: [Insert Date]
            </Paragraph>
            <Paragraph>
                Info Edge India Limited and its affiliated companies (“Company”, “we”, “us”, or “our”) are committed to protecting your privacy. This Privacy Policy (“Policy”) outlines how we collect, use, share, and manage your personal data when you access or use our website [spaceswala.com] and mobile application (together, the “Platform”) or engage with our services (the “Services”).
            </Paragraph>
            <Paragraph>
                By using our Platform or Services, or by providing your consent through other means, you agree to the collection, use, and sharing of your information as described in this Policy.
            </Paragraph>

            <div className="mt-8">
                <h3 className="scroll-m-20 mb-6 text-2xl font-semibold tracking-tight">
                    1. Personal Data We Collect
                </h3>
                <div className="space-y-4">
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">A. Information You Provide</h4>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>Personal Details: Name, contact details (email, phone), address, login credentials.</li>
                            <li>Property Details: Type (residential/commercial), location, area, amenities, price, images.</li>
                            <li>Identification Documents: PAN, Aadhaar, passport, voter ID, driver’s license, property ownership documents, etc.</li>
                            <li>Payment Info: We use third-party providers for payments. We may receive transaction references but do not store financial details (e.g., card or bank info).</li>
                            <li>Communication Records: Messages, calls, complaints, feedback, or support queries.</li>
                            <li>Voice Recordings: Voiceovers included in property videos may involve voice sample collection.</li>
                            <li>Other Voluntarily Provided Info: Any other information you share via consent.</li>
                        </ul>
                    </div>

                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">B. Information Collected Automatically</h4>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>Usage Data: Search queries, time spent, preferences, interactions.</li>
                            <li>Technical Data: IP address, browser, OS, device info, location (approximate), etc.</li>
                            <li>Communication Data: Chats with other users (e.g., dealers, brokers).</li>
                            <li>Cookies & Tracking: We use cookies, beacons, log files, etc., to improve functionality and personalize experience.</li>
                            <li>Purchase/Transaction Data: Order and transaction references (excluding financial data).</li>
                            <li>App Permissions: Access to location, notifications, camera, storage, etc., based on user settings.</li>
                            <li>Insights: Behavioral insights generated from usage patterns.</li>
                        </ul>
                    </div>

                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">C. Information from Third Parties</h4>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>Information from ad/marketing partners.</li>
                            <li>Data from public sources or campaigns.</li>
                            <li>Information shared via third-party logins (e.g., Google SSO).</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="scroll-m-20 mb-6 text-2xl font-semibold tracking-tight">
                    2. How We Use Your Personal Data
                </h3>
                <div className="space-y-4">
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">A. To Provide Services and Operate the Platform</h4>
                        <Paragraph>
                            Account creation, onboarding, listing properties, connecting with other users (e.g., buyers, builders), displaying listings and enabling relevant search results, generating voiceover videos, personalizing recommendations.
                        </Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">B. Marketing and Promotions</h4>
                        <Paragraph>Sending you promotional emails, SMS, or notifications about third-party products/services based on your interest.</Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">C. Third-Party Marketing</h4>
                        <Paragraph>With your consent, we may share your data with partners (e.g., banks, NBFCs) to provide relevant offerings.</Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">D. Platform Improvement</h4>
                        <Paragraph>Conducting surveys, analyzing usage, optimizing user experience, personalizing features, and tracking engagement with YouTube API for video metrics.</Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">E. Fraud Prevention and Security</h4>
                        <Paragraph>Detecting fraudulent activity, verifying users and listings, screening against government watchlists.</Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">F. Troubleshooting & Recovery</h4>
                        <Paragraph>Resolving issues, maintaining backups, supporting recovery mechanisms.</Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">G. Analytics</h4>
                        <Paragraph>Creating usage profiles to improve content and recommendations.</Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">H. Legal Compliance</h4>
                        <Paragraph>Meeting legal obligations or defending legal claims.</Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">I. Communication</h4>
                        <Paragraph>Responding to your inquiries and feedback, providing support or onboarding assistance.</Paragraph>
                    </div>
                    <div className="sm:ml-10 ml-2">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">J. Grievance Redressal</h4>
                        <Paragraph>Resolving complaints and grievances submitted by you.</Paragraph>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="scroll-m-20 mb-6 text-2xl font-semibold tracking-tight">
                    3. Use of Cookies
                </h3>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4"></h2>

                <Paragraph>
                    We use cookies and similar tracking technologies to improve navigation and performance, understand user preferences, and deliver personalized experiences. You may control cookies through your browser settings, but disabling cookies may affect Platform functionality.
                </Paragraph>
            </div>

            <div className="mt-8">
                <h3 className="scroll-m-20 mb-6 text-2xl font-semibold tracking-tight">
                    4. Sharing Your Personal Data
                </h3>
                <Paragraph>
                    We share your information with the following parties:
                </Paragraph>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    <li>Service Providers: Vendors, field agents, verification partners, mailing service providers, etc.</li>
                    <li>Other Users: Contact details shared with buyers, sellers, brokers, or builders for property inquiries.</li>
                    <li>Banking/NBFC Partners: For home loan facilitation based on your interest.</li>
                    <li>Legal Authorities: As required by law or for legal proceedings.</li>
                    <li>Corporate Restructuring: In case of mergers, acquisitions, or reorganization.</li>
                    <li>Advisors: Auditors, consultants, and legal representatives on a need-to-know basis.</li>
                </ul>
            </div>
        </div>
    );
};
