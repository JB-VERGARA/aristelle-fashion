import Head from 'next/head';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getHomepage } from '@/lib/contentful';

export async function getStaticProps() {
  const homepageData = await getHomepage();
  const { businessName, businessDescription, tagline, logo } = homepageData;

  return {
    props: {
      businessName,
      businessDescription,
      tagline,
      logo,
    },
  };
}

const AboutUs = ({ businessName, businessDescription, tagline, logo }) => {
  return (
    <div className="about-us-page">
      <Head>
      <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Aristelle Fashion",
                  "url": "https://aristelle-fashion.vercel.app/about",
                }),
              }}
          />
        <title>About Aristelle Fashion - Learn About Our Journey</title>
        <meta name="google-site-verification" content="eU05SCy7JTfBe91SugzZRIAj4i-k_3RYStozFCv2V58" />
        <link rel="canonical" href="https://aristelle-fashion.vercel.app/about" />
        <meta name="description" content={businessDescription} />
        <meta name="keywords" content={`${businessName}, About Us, Handcrafted Bracelets, Fashion`} />
        <meta name="author" content={`${businessName}, John Bryan B. Vergara, Niña Mae C. Ramirez`} />
        <meta property="og:title" content={`About ${businessName}`} />
        <meta property="og:description" content={businessDescription} />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://aristelle-fashion.vercel.app/about" />
      </Head>
      <Header businessName={businessName} logo={logo} />
      <div className="about-us-content">
        <section className="about-us-header">
          <h1 className="about-us-title">About {businessName}</h1>
          <p className="about-us-tagline">{tagline}</p>
        </section>
        <section className="about-us-description">
          <p>{businessDescription}</p>
        </section>

        {/* Team Section */}
        <section className="about-us-team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="\images\founder1.jpg" alt="Team Member 1" />
              <h3>Niña Mae C. Ramirez</h3>
              <p>Founder & Designer</p>
            </div>
            <div className="team-member">
            <img src="\images\cofounder.jpg" alt="Team Member 1" />
              <h3>John Bryan Vergara</h3>
              <p>Co-Founder</p>
            </div>
          </div>
        </section>


        {/* Milestones */}
        <section className="about-us-timeline">
          <h2>Our Journey</h2>
          <ul>
            <li>2024: Founded with a vision of creating unique beadwork.</li>
            <li>2024: Launched our first collection of handcrafted Bracelets.</li>
            <li>2024: Expanded our line to include custom charms.</li>
          </ul>
        </section>

        {/* Testimonials */}
        <section className="about-us-testimonials">
          <h2>What Our Customers Are Saying</h2>
          <blockquote>"Can’t get enough of Aristelle, already thinking about what to add next to my collection!" - Nathalie M.</blockquote>
          <blockquote>"These bracelets have added such a unique touch to my collection. Highly recommend!" - Clarissa R.</blockquote>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
