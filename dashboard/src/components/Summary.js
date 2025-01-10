import React, { useState, useEffect } from "react";
import axios from "axios";
const Summary = () => {
  const [loggedInUser, setLoggedInUser] = useState("Guest");
  useEffect(() => {
    axios
      .post("http://localhost:8080/", {}, { withCredentials: true })
      .then((response) => {
        if (response.data.status) {
          console.log(response.data.user ,"found the user")
          setLoggedInUser(response.data.user);
        } else {
          console.error(response.data.message || "Failed to fetch user");
        }
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      });
  }, []);
  return (
    <>
      <div className="username">
        <h6>Hi, {loggedInUser} </h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;