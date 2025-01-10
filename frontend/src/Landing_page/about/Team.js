import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row border-top">
        <h1 className="mt-3 text-center">About the Creator</h1>
      </div>
      <div
        className="row p-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-2 text-center">
          <img
            src="media/Ritikaphoto3.png"
            alt="Creator"
            style={{
              width: "60%",
              height: "300px",
              borderRadius: "100%",
            }}
          />
          <h4 className="mt-4">Ritika Malik</h4>
          <h6>Developer & Designer</h6>
        </div>
        <div className="col-6 p-2">
          <p>
            This project was created by <strong>Ritika Malik</strong> as part of
            a web development practice initiative. It includes a fully
            functional clone of Zerodha's landing page and Kite dashboard.
          </p>

          

          <p>
            If you're reviewing this project, feel free to connect with me to
            discuss web development, application design, or collaboration
            opportunities!
          </p>

          <p>
            Connect with me on{" "}
            <a href="https://github.com/RitikaMalik71" style={{ textDecoration: "none" }}>
              GitHub
            </a>{" "}
            /{" "}
            <a href="https://linkedin.com/in/ritikamalik1" style={{ textDecoration: "none" }}>
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
