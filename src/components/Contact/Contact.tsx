// import React from "react";

import SectionHeader from "../SectionHeader/SectionHeader";

function Contact() {
  return (
    <div className="contact-us py-5">
      <SectionHeader title={"Contact us"} />
      <form className="container">
        <div className="row">
          <div className="col-md-6 inputs mt-3">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="col-md-6 text-area mt-3">
            <textarea placeholder="Message"></textarea>
          </div>
          <div className="col-12 mt-3">
            <button>Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
