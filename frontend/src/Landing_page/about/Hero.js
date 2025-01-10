import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 p-5 mb-5">
        <h1 className="fs-2 text-center">
          Experience a Seamless Trading Workflow with Our Zerodha Clone
        </h1>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            Welcome to the Zerodha clone project, a platform designed and
            developed as a practice initiative to replicate the functionality
            and design of the original Zerodha website.
          </p>
          <p>
            Users can register on the landing page, log in, and seamlessly
            transition to the Kite dashboard. The dashboard offers trading
            features and functionality, simulating the experience of the
            original Zerodha Kite platform.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            This project highlights expertise in modern web development tools
            like React, Node.js, Express.js, and MongoDB, focusing on building
            scalable, user-friendly applications.
          </p>
          <p>
            It reflects a commitment to learning, innovation, and problem-solving by creating a real-world product replica that aligns with industry standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
