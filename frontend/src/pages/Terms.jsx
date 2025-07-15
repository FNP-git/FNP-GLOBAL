import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Terms.css';

const Terms = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="terms-detail">
        <div className="terms-detail-container">
          <h1 className="terms-detail-title">Terms & Conditions</h1>
          <div className="terms-detail-content">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using FNP Global's website and services, you agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our services.
            </p>

            <h2>2. Services Description</h2>
            <p>
              FNP Global provides business consulting, strategic guidance, and related professional services. We reserve the right to modify, 
              suspend, or discontinue any aspect of our services at any time without prior notice.
            </p>

            <h2>3. User Conduct and Prohibited Activities</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Transmit any harmful, threatening, abusive, or defamatory content</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt our services or servers</li>
              <li>Use our services to send spam or unsolicited communications</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
            </ul>

            <h2>4. SMS and Communication Terms</h2>
            <p>
              <strong>By providing your phone number, you agree to receive a text message from FNP Global. 
              Message and Data rates may apply, Message frequency varies. To stop receiving messages, 
              reply 'STOP' at any time. For more information, reply 'HELP'.</strong>
            </p>
            <p>
              We may send you service-related communications, promotional messages, and updates about our services. 
              You can opt out of promotional messages at any time by following the unsubscribe instructions provided.
            </p>

            <h2>5. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, 
              use, and protect your personal information. By using our services, you consent to the collection 
              and use of your information as described in our Privacy Policy.
            </p>

            <h2>6. Intellectual Property Rights</h2>
            <p>
              All content on our website, including text, graphics, logos, images, and software, is the property 
              of FNP Global or its licensors and is protected by copyright, trademark, and other intellectual property laws. 
              You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2>7. Usage Restrictions</h2>
            <p>
              You may use our website and services only for lawful purposes and in accordance with these Terms. 
              You are responsible for ensuring that your use complies with all applicable laws and regulations.
            </p>

            <h2>8. Disclaimers and Limitation of Liability</h2>
            <p>
              Our services are provided "as is" without warranties of any kind, either express or implied. 
              We do not warrant that our services will be uninterrupted, error-free, or completely secure.
            </p>
            <p>
              To the fullest extent permitted by law, FNP Global shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including but not limited to loss of profits, data, 
              or business opportunities.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless FNP Global, its officers, directors, employees, and agents 
              from any claims, damages, losses, or expenses arising from your use of our services or violation of these Terms.
            </p>

            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any time, with or without cause, 
              and with or without notice. Upon termination, all provisions of these Terms that should survive 
              termination shall remain in effect.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India, 
              without regard to its conflict of law principles. Any disputes arising under these Terms 
              shall be subject to the exclusive jurisdiction of the courts in India.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting on our website. Your continued use of our services after any changes constitutes 
              acceptance of the new Terms.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> info@fnpglobal.com<br />
              <strong>Website:</strong> www.fnpglobal.com
            </p>

            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be 
              limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain 
              in full force and effect.
            </p>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;