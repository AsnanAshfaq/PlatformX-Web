import React, { FC, useEffect, useState } from "react";
import "./App.css";
import axios from "./Utils/Axios";

type props = {
  name: string;
  description: string;
};
const Editor: FC<props> = ({ name, description }) => {
  const handleSubmit = () => {
    // get id from local storage
    const api_submission_id = localStorage.getItem("api_submission_id");
    const submission_id = localStorage.getItem("submission_id");
    console.log(api_submission_id, submission_id);

    axios
      .post("/api/test/create/", {
        fyp_id: "15383966-2043-4899-9a31-bf2e75616316",
        submission_id: api_submission_id,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Your submission has been made. You may leave this page!!!");
        }
      })
      .catch((error) => {
        alert(error.response.data.errro);
      });
  };

  return (
    <div className="App container-fluid" style={{ marginLeft: 30 }}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          padding: 10,
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
      <div style={{ marginLeft: 40 }}>
        <h2 style={{ color: "white", fontSize: 20 }}>Problem</h2>
        <p style={{ color: "white" }}>Tower of Hanoi</p>
      </div>
      <div>
        <p style={{ color: "white" }}>
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
