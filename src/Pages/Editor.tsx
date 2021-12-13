import React, { FC, useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "../Utils/Axios";
import { Routes, Route, useParams } from "react-router-dom";

type props = {};

const Editor: FC<props> = ({}) => {
  let params = useParams();

  const [loading, setloading] = useState(false);
  const [data, setdata] = useState<any>({});
  const handleSubmit = () => {
    // get id from local storage
    const api_submission_id = localStorage.getItem("api_submission_id");
    const submission_id = localStorage.getItem("submission_id");

    const { id } = params;
    axios
      .post("/api/submission/", {
        fyp_id: id,
        submission_id: api_submission_id,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Your submission has been made. You may leave this page!!!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.error);
      });
  };

  useEffect(() => {
    console.log(params.id);
    axios
      .get(`/api/test/${params.id}/`)
      .then((response) => {
        if (response.status === 200) {
          setdata(response.data);
          console.log("Test data is", response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          // alert(params.id);
        }
        return error.response;
      });
  }, []);
  return (
    <div className="App container-fluid">
      <Header />

      <div style={{ marginLeft: 0 }}>
        <div className="container-fluid">
          <div className="row">
            <div
              style={{
                flex: 0.8,
              }}
            >
              <h4 style={{ color: "white" }}>Problem</h4>
            </div>
            <div
              style={{
                flex: 0.2,
              }}
            >
              <p
                style={{
                  // color: `${
                  //   new Date(data.end_date) === new Date()
                  //     ? "red"
                  //     : new Date(data.end_date) < new Date()
                  //     ? "#f10000"
                  //     : "white"
                  // }`,
                  textAlign: "center",
                  fontStyle: "italic",
                  color: "red",
                }}
              >
                Last Date to submit code is
                <br />
                {new Date(data.end_date) === new Date()
                  ? "Last Day of Submission"
                  : new Date(data.end_date) < new Date()
                  ? "Deadline has surpassed. You cannot submit code now."
                  : new Date(data.end_date).toDateString()}
              </p>
            </div>
          </div>
        </div>

        <h6 style={{ color: "#98a1a6", fontSize: 22 }}>{data.name}</h6>
      </div>

      <div style={{ marginLeft: 20 }}>
        <p style={{ color: "#9ba5ab" }}>{data.description}</p>
      </div>
      <div>
        <p style={{ color: "white" }}>Instructions</p>
        <ul style={{ color: "white" }}>
          You can submit test till the last date.
        </ul>
        <ul style={{ color: "white" }}>
          Make sure that your code is clean and working and also contains
          comments.
        </ul>
        <ul style={{ color: "red", fontStyle: "italic", fontSize: 20 }}>
          ONLY YOUR LAST SUBMISSION WILL BE ACCEPTED.
        </ul>
      </div>

      <div className="d-flex flex-row-reverse bd-highlight">
        {new Date(data.end_date) === new Date() ||
          (new Date(data.end_date) > new Date() && (
            <button
              type="button"
              className="btn btn-success"
              style={{
                width: 100,
                height: 35,
                fontWeight: "bold",
                marginBottom: 20,
              }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          ))}
      </div>

      <div
        className="sec-widget"
        data-theme="dark"
        data-widget="8f636cd251c342cf1c4352ec520701f7"
      ></div>
    </div>
  );
};

export default Editor;
