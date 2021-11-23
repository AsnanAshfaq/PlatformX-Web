import React, { useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* for dark theme  */}
      {/*  add data-theme="dark" */}
      <div
        className="sec-widget"
        data-widget="58da4c9cd8e023cfeb6e4abd4edd2c08"
        data-theme="dark"
        data-id="58da4c9cd8e023cfeb6e4abd4edd2c08"
        data-custom-data="user_id={32432}"
      ></div>
      <div id="result"></div>
    </div>
  );
}

export default App;
