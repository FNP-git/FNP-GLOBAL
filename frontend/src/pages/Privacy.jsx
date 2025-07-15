import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Privacy.css';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="privacy-detail">
        <div className="privacy-detail-container">
          <h1 className="privacy-detail-title">Privacy Policy</h1>
          <div className="privacy-detail-content">
            <h2>1. Introduction</h2>
            <p>
              At FNP Global, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our 
              website, use our services, or interact with us.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
              <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence you send to us</li>
              <li><strong>Account Information:</strong> Login credentials and account preferences</li>
              <li><strong>Professional Information:</strong> Company name, job title, business requirements</li>
            </ul>

            <h3>Messaging Data</h3>
            <p>
              When you opt-in to receive SMS communications from us, we collect and store your phone number, 
              message preferences, and communication history for service delivery and campaign tracking purposes.
            </p>

            <h3>Technical Information</h3>
            <p>We automatically collect certain technical information, including:</p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your personal information for the following purposes:</p>
            <ul>
              <li><strong>Service Delivery:</strong> To provide our consulting and business services</li>
              <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
              <li><strong>Campaign Tracking:</strong> To monitor and analyze the effectiveness of our marketing campaigns</li>
              <li><strong>Analytics:</strong> To understand website usage patterns and improve our services</li>
              <li><strong>Marketing:</strong> To send promotional materials and updates about our services (with your consent)</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <h2>4. Data Sharing and Third Parties</h2>
            <h3>Service Providers</h3>
            <p>
              We may share your information with trusted third-party service providers who assist us in operating our website, 
              conducting business, or providing services to you. These providers are contractually obligated to maintain 
              the confidentiality of your information.
            </p>

            <h3>Carriers and Registration Purposes</h3>
            <p>
              We may share necessary information with telecommunications carriers and registration authorities 
              for SMS delivery and compliance purposes.
            </p>

            <h3>Mobile Information Protection</h3>
            <p>
              <strong>Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. 
              All the above categories exclude text messaging originator opt-in data and consent; this information will not 
              be shared with any third parties.</strong>
            </p>

            <h3>Legal Requirements</h3>
            <p>
              We may disclose your information when required by law, court order, or government regulation, 
              or when we believe disclosure is necessary to protect our rights or comply with legal obligations.
            </p>

            <h2>5. SMS Communication and Opt-Out</h2>
            <p>
              When you provide your phone number and consent to receive SMS messages, you agree to receive 
              text communications from FNP Global regarding our services, promotions, and updates.
            </p>
            <p>
              <strong>If you wish to be removed from receiving future communications, you can opt out by texting STOP, QUIT.</strong>
            </p>
            <p>
              You may also contact us directly at info@fnpglobal.com to update your communication preferences 
              or request removal from our mailing lists.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul>
              <li>Secure data transmission using encryption technologies</li>
              <li>Access controls and authentication procedures</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection practices</li>
            </ul>

            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
              Privacy Policy, unless a longer retention period is required or permitted by law. When information is no 
              longer needed, we securely delete or anonymize it.
            </p>

            <h2>8. Your Rights and Choices</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
            </ul>

            <h2>9. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
              and personalize content. You can control cookie settings through your browser preferences, though some 
              website features may not function properly if cookies are disabled.
            </p>

            <h2>10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. We ensure that 
              such transfers comply with applicable data protection laws and implement appropriate safeguards to 
              protect your information.
            </p>

            <h2>11. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected information from a child, 
              we will take steps to delete such information promptly.
            </p>

            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
              We will notify you of any material changes by posting the updated policy on our website and updating the 
              "Last Updated" date below.
            </p>

            <h2>13. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@fnpglobal.com<br />
              <strong>Website:</strong> www.fnpglobal.com
            </p>

            <h2>14. Compliance</h2>
            <p>
              This Privacy Policy is designed to comply with applicable data protection laws and regulations. 
              We regularly review our practices to ensure ongoing compliance and protection of your privacy rights.
            </p>

            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;