import React from "react";
import Contact1 from "./contact1";
import Contact2 from "./contact2";

const Contact = () => {
  return (
    <React.Fragment>
      <h3>Contact</h3>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Contact1 />
          </div>
          <div className="col-6">
            <Contact2 />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
