import React, { FC, useEffect, useState } from "react";
import "./App.css";
import axios from "./Utils/Axios";
import { useTimer } from "react-timer-hook";

type Props = {
  expiryTimestamp: any;
};

const MyTimer: FC<Props> = ({ expiryTimestamp }) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h5 style={{ color: "white" }}>Timer</h5>
      <div style={{ color: "white" }}>
        <span style={{ color: "white" }}>{days}</span>:
        <span style={{ color: "white" }}>{hours}</span>:
        <span style={{ color: "white" }}>{minutes}</span>:
        <span style={{ color: "white" }}>{seconds}</span>
      </div>
    </div>
  );
};

type props = {
  name: string;
  description: string;
};
const Editor: FC<props> = ({ name, description }) => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 1200); // 10 minutes timer
  const handleSubmit = () => {
    // get id from local storage
    const api_submission_id = localStorage.getItem("api_submission_id");
    const submission_id = localStorage.getItem("submission_id");

    axios
      .post("/api/submission/", {
        fyp_id: "15383966-2043-4899-9a31-bf2e75616316",
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

  return (
    <div className="App container-fluid">
      <div style={{ flex: 1, flexDirection: "row" }}>
        <div className="row">
          <div className="col-11 d-flex justify-content-center">
            <div
              style={{
                marginTop: 4,
              }}
            >
              <h1
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                PlatformX
              </h1>
            </div>
          </div>
          <div className="col-1 d-flex justify-content-center align-items-end">
            <MyTimer expiryTimestamp={time} />
          </div>
        </div>
      </div>
      <div style={{ marginLeft: 0 }}>
        <h2 style={{ color: "white" }}>Problem</h2>
        <h4 style={{ color: "#98a1a6", fontSize: 22 }}>Tower of Hanoi</h4>
      </div>
      <div style={{ marginLeft: 20 }}>
        <p style={{ color: "#9ba5ab" }}>
          There are three towers. The objective of the game is to move all the
          disks over to tower #3, but you can't place a larger disk onto a
          smaller disk. To play the game or learn more about the Tower of Hanoi,
          check the Resources tab. Create a function that takes a number discs
          as an argument and returns the minimum amount of steps needed to
          complete the game. Examples towerHanoi(3) ➞ 7 towerHanoi(5) ➞ 31
          towerHanoi(0) ➞ 0 Notes The amount of discs is always a positive
          integer. 1 disc can be changed per move.
        </p>
      </div>
      <div className="d-flex flex-row-reverse bd-highlight">
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
      </div>

      <div
        className="sec-widget"
        data-widget="58da4c9cd8e023cfeb6e4abd4edd2c08"
        data-theme="dark"
        data-id="58da4c9cd8e023cfeb6e4abd4edd2c08"
        // data-custom-data="user_id={32432}"
      ></div>
    </div>
  );
};

export default Editor;
