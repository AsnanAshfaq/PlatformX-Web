import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import FYPCard from "../Components/FYPCard";
import { Link } from "react-router-dom";
import axios from "../Utils/Axios";

function Home() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const getData = async () => {
    setloading(true);
    axios
      .get("/api/fyps/") 
      .then((response) => {
        setloading(false);
        setdata(response.data);
      })
      .catch((error) => {

        setloading(false);
        if (error.response) {
          alert(error.response);
        }
        return error.response;
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App container-fluid">
      <Header />
      <div className="row">
        <div className="col-1" />

        <div className="col-2 mt-4">
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
                    My FYP's
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1" />
        <div className="col-8 p-0 m-0 ">
          {!loading ? (
            data.map((item: any) => {
              if (item.is_applied) {
                return <FYPCard data={item} />;
              }
            })
          ) : (
            <p style={{ color: "white" }}>Loading</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
