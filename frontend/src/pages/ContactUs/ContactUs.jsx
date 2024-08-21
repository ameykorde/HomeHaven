import React from 'react';
import './ContactUs.css'; // Assuming you have your CSS in a file named Articles.css

const ContactUs = () => {
  return (
    <div className="articles-container">
      <h2 className="article-title">Most Viewed Articles</h2>
      <p className="article-description">Find our most viewed articles &amp; guides here</p>
      <div className="articles-box">
        <a 
          href="https://help.furlenco.com/views/view-article.php?article=20097&amp;artical_name=How%20can%20I%20contact%20customer%20support%20for%20assistance%3F" 
          className="article"
        >
          <p className="text-opa-5">Article 1</p>
          <h4>How can I contact customer support for assistance?</h4>
          <p className="text-opa-5">Views 4458</p>
        </a>
        <a 
          href="https://help.furlenco.com/views/view-article.php?article=15999&amp;artical_name=Is%20there%20a%20minimum%20rental%20period%3F" 
          className="article"
        >
          <p className="text-opa-5">Article 2</p>
          <h4>Is there a minimum rental period?</h4>
          <p className="text-opa-5">Views 3920</p>
        </a>
        <a 
          href="https://help.furlenco.com/views/view-article.php?article=16296&amp;artical_name=How%20do%20I%20contact%20UNLMTD%20customer%20support%3F" 
          className="article"
        >
          <p className="text-opa-5">Article 3</p>
          <h4>How do I contact UNLMTD customer support?</h4>
          <p className="text-opa-5">Views 2994</p>
        </a>
      </div>

      <div className="contact-container">
        <div className="text">
          <h2 className="title">Still Have Questions?</h2>
          <p className="description">
            Our customer care team is here for you! Call us at <span id="email-placeholder">(080)-46467373</span>
          </p>
        </div>
        <div className="image">
          <img src="https://help.furlenco.com/assets/images/contact-page-banner.png" alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
