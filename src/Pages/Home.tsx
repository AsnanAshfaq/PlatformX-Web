import React from "react";
import Header from "../Components/Header";
import FYPCard from "../Components/FYPCard";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App container-fluid">
      <Header />
      <div className="row">
        <div className="col-2">
          <div className="accordion" id="accordionExample">
            <div
              className="card"
              style={{
                backgroundColor: "#1b1c17",
              }}
            >
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-controls="collapseOne"
                    style={{ color: "white" }}
                  >
                    List
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <p style={{ color: "white" }}>View My FYP's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 p-0 m-0">
          <FYPCard data={{}} />
        </div>
      </div>
    </div>
  );
}

export default Home;
