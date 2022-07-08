import React, { useState } from "react";
import toastr from "toastr";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    textarea: "",
  });

  const getmessageDetail = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMessage(() => {
      return {
        ...message,
        [name]: value,
      };
    });
  };

  const getMessage = (e) => {
    e.preventDefault();
    
   if (message.textarea && message.name ) {
      toastr.success(
        `Thanks For kind words Dear ${message.name} we will connect with you soon ❤`
      );
    }
    if (message.textarea < 5) {
      toastr.error(`Please fill all the Requrements`);
    }
    e.target.reset();
    setMessage({name: "",
    email: "",
    subject: "",
    textarea: "",})
  };

  return (
    <div id="header">
      <div className="container">
        <div id="welcomeLine" className="row">
          <div id="mainBody">
            <div className="container">
              <hr className="soften" />
              <h1>Visit us</h1>
              <hr className="soften" />
              <div className="row">
                <div className="span4">
                  <h4>Contact Details</h4>
                  <p>
                    {" "}
                    18 Fresno,
                    <br /> CA 93727, USA
                    <br />
                    <br />
                    info@bootsshop.com
                    <br />
                    ﻿Tel 123-456-6780
                    <br />
                    Fax 123-456-5679
                    <br />
                    web:bootsshop.com
                  </p>
                </div>

                <div className="span4">
                  <h4>Opening Hours</h4>
                  <h5> Monday - Friday</h5>
                  <p>
                    09:00am - 09:00pm
                    <br />
                    <br />
                  </p>
                  <h5>Saturday</h5>
                  <p>
                    09:00am - 07:00pm
                    <br />
                    <br />
                  </p>
                  <h5>Sunday</h5>
                  <p>
                    12:30pm - 06:00pm
                    <br />
                    <br />
                  </p>
                </div>
                <div className="span4">
                  <h4>Email Us</h4>
                  <form
                    className="form-horizontal"
                    onSubmit={(e) => getMessage(e)}
                  >
                    <fieldset>
                      <div className="control-group">
                        <input
                          type="text"
                          placeholder="name"
                          name="name"
                          className="input-xlarge"
                          onChange={getmessageDetail}
                          defaultValue={message.name}
                        />
                      </div>
                      <div className="control-group">
                        <input
                          type="text"
                          placeholder="email"
                          name="email"
                          className="input-xlarge"
                          onChange={getmessageDetail}
                          defaultValue={message.email}
                        />
                      </div>
                      <div className="control-group">
                        <input
                          type="text"
                          placeholder="subject"
                          name="subject"
                          className="input-xlarge"
                          onChange={getmessageDetail}
                          defaultValue={message.subject}
                        />
                      </div>
                      <div className="control-group">
                        <textarea
                          rows="3"
                          id="textarea"
                          name="textarea"
                          className="input-xlarge"
                          onChange={getmessageDetail}
                          defaultValue={message.textarea}
                        ></textarea>
                      </div>

                      <button className="btn btn-large" type="submit">
                        Send Messages
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="span12">
                  <iframe
                    style={{ width: "100%", height: "300", border: "0px" }}
                    scrolling="no"
                    src="https://maps.google.co.uk/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=18+California,+Fresno,+CA,+United+States&amp;aq=0&amp;oq=18+California+united+state&amp;sll=39.9589,-120.955336&amp;sspn=0.007114,0.016512&amp;ie=UTF8&amp;hq=&amp;hnear=18,+Fresno,+California+93727,+United+States&amp;t=m&amp;ll=36.732762,-119.695787&amp;spn=0.017197,0.100336&amp;z=14&amp;output=embed"
                  ></iframe>
                  <br />
                  <small>
                    <a
                      href="https://maps.google.co.uk/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=18+California,+Fresno,+CA,+United+States&amp;aq=0&amp;oq=18+California+united+state&amp;sll=39.9589,-120.955336&amp;sspn=0.007114,0.016512&amp;ie=UTF8&amp;hq=&amp;hnear=18,+Fresno,+California+93727,+United+States&amp;t=m&amp;ll=36.732762,-119.695787&amp;spn=0.017197,0.100336&amp;z=14"
                      style={{ color: "#0000FF", textAlign: "left" }}
                    >
                      View Larger Map
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
