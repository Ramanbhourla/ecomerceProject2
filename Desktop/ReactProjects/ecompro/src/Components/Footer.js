import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footerSection">
      <div className="container">
        <div className="row">
          <div className="span3">
            <h5>ACCOUNT</h5>
            <Link to={"/login"}>YOUR ACCOUNT</Link>
            <Link to={"/login"}>PERSONAL INFORMATION</Link>
            <Link to={"/login"}>ADDRESSES</Link>
            <Link to={"/login"}>DISCOUNT</Link>
            <Link to={"/login"}>ORDER HISTORY</Link>
          </div>
          <div className="span3">
            <h5>INFORMATION</h5>
            <Link to={"/contact"}>CONTACT</Link>
            <Link to={"/registration"}>REGISTRATION</Link>
            <Link to={"/registration"}>LEGAL NOTICE</Link>
            <Link to={"/registration"}>TERMS AND CONDITIONS</Link>
            <Link to={"/faq"}>FAQ</Link>
          </div>
          <div className="span3">
            <h5>OUR OFFERS</h5>
            <Link to={'/'}>NEW PRODUCTS</Link>
            <Link to={'/'}>TOP SELLERS</Link>
            <Link to={'/'}>SPECIAL OFFERS</Link>
            <Link to={'/'}>MANUFACTURERS</Link>
            <Link to={'/'}>SUPPLIERS</Link>
          </div>
          <div id="socialMedia" className="span3 pull-right">
            <h5>SOCIAL MEDIA </h5>

            <img
              width="60"
              height="60"
              src="/images/facebook.png"
              title="facebook"
              alt="facebook"
            />

            <img
              width="60"
              height="60"
              src="/images/twitter.png"
              title="twitter"
              alt="twitter"
            />

            <img
              width="60"
              height="60"
              src="/images/youtube.png"
              title="youtube"
              alt="youtube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
