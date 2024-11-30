import React from 'react';
import SubscribeForm from '../components/SubscribeForm'; // Adjust the path as needed
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getHomepage } from '@/lib/contentful';

export async function getStaticProps() {
  const homepageData = await getHomepage();
  const { businessName, businessDescription, logo, } = homepageData;

  return {
    props: {
      businessName,
      businessDescription,
      logo,
    },
  };
}

const Contact = ({ businessName, businessDescription, logo }) => {
  return (
    <>
      {/* Header Component */}
      <Header businessName={businessName} logo={logo} />

      {/* Main Contact Page Content */}
      <main className="contact-page">
        <div className="contact-container">
          <h1 className="contact-heading">Contact Us</h1>
          <p className="contact-description">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hi,
            feel free to reach out using the form below.
          </p>

          <div className="contact-form-wrapper">
            <SubscribeForm />
          </div>

          <div className="contact-info">
            <h2 className="contact-info-heading">Other Ways to Reach Us</h2>
            <p className="contact-info-text">
              Email: <a href="mailto:aristellefashion@gmail.com">aristellefashion@gmail.com</a>
            </p>
            <p className="contact-info-text">
              Contact Number: <a href="tel:+639933249559">+639933249559</a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer businessName={businessName} businessDescription={businessDescription} />
    </>
  );
};

export default Contact;
