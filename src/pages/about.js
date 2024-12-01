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
          <blockquote>"The craftsmanship of Aristelle Fashion pieces is unparalleled. I get compliments on my necklace all the time!" - Sarah L.</blockquote>
          <blockquote>"These jewelry pieces have added such a unique touch to my collection. Highly recommend!" - Mark R.</blockquote>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
