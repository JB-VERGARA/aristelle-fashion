// src/components/Banner.js

import React from 'react';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = ({ banner }) => {
  if (!banner || banner.length === 0) {
    return null; // Return null if no banners are available
  }

  const settings = {
    infinite: true,
    speed: 500, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Slide change interval (3 seconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows for navigation
    dots: true, // Show dots for navigation
    fade: true, // Use fade transition (smoother effect)
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        {banner.map((image, index) => (
          <div key={index} className="banner-slide">
            <img
              src={image.fields.file.url}
              alt={`Banner ${index + 1}`}
              className="banner-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
