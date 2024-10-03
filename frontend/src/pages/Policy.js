import React from "react";
import Layout from "./../components/Layout/Layout";
import pp from "./../images/Privacy-Policy.png";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img src={pp} alt="contactus" style={{ width: "95%" }} />
        </div>
        <div className="col-md-4">
          <p>
            At Velora Mart, we are committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website , as well as your rights
            in relation to that information.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
