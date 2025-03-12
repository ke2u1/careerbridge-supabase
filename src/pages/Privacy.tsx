
import { MainLayout } from "@/components/layout/MainLayout";

const Privacy = () => {
  return (
    <MainLayout>
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: May 1, 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="prose max-w-none">
          <p className="lead">
            At JobScout, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide to us when you register on our platform, express interest in obtaining information about us or our products and services, participate in activities on our platform, or otherwise contact us.
          </p>
          <p>
            The personal information we collect may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and contact details</li>
            <li>Login credentials and password</li>
            <li>Employment history, education, and professional information</li>
            <li>Resume and cover letters</li>
            <li>Preferences and interests related to jobs</li>
            <li>Payment information for premium services</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Automatically Collected Information</h3>
          <p>
            We automatically collect certain information when you visit, use, or navigate our platform. This information does not reveal your specific identity but may include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device and browser information</li>
            <li>IP address and location information</li>
            <li>Usage patterns and preferences</li>
            <li>Cookies and tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect for various business purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing, personalizing, and improving our services</li>
            <li>Processing job applications and matching candidates with employers</li>
            <li>Communicating with you about updates, security alerts, and support</li>
            <li>Marketing and promotional purposes with your consent</li>
            <li>Analyzing user behavior to enhance our platform</li>
            <li>Detecting and preventing fraud and abuse</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
          <p>
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Employers when you apply for jobs or make your profile visible</li>
            <li>Service providers that help us deliver our services</li>
            <li>Analytics partners to improve our platform</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your explicit consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Right to access your personal information</li>
            <li>Right to rectify or update inaccurate information</li>
            <li>Right to delete your personal information</li>
            <li>Right to restrict or object to processing</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us at privacy@jobscout.in.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to collect and store information about your preferences and activities on our platform. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on this page with a new effective date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <address className="not-italic mt-2">
            JobScout<br />
            123 Tech Park, Whitefield<br />
            Bangalore, Karnataka 560066<br />
            India<br />
            Email: privacy@jobscout.in<br />
            Phone: +91 98765 43210
          </address>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
