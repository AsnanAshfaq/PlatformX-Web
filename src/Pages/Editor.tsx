import React, { FC } from "react";
import Header from "../Components/Header";
import axios from "../Utils/Axios";
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
      <Header />
      <div style={{ marginLeft: 0 }}>
        <h4 style={{ color: "white" }}>Problem</h4>
        <h6 style={{ color: "#98a1a6", fontSize: 22 }}>Tower of Hanoi</h6>
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
        data-theme="dark"
        data-widget="8f636cd251c342cf1c4352ec520701f7"
      ></div>
    </div>
  );
};

export default Editor;
