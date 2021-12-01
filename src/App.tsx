import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./Utils/Axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./Editor";
import Header from "./Components/Header";
import Home from "./Home";
import SignIn from "./SignIn";
function App() {
  const [Problem, setProblem] = useState<any>();
  const [loading, setloading] = useState(true);

  const getDate = () => {
    setloading(true);
    // get test
    axios
      .get("/api/test/15383966-2043-4899-9a31-bf2e75616316/")
      .then((response) => {
        setProblem(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setloading(false);
      });
  };
  useEffect(() => {
    getDate();
  }, []);

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/editor"
            element={<Editor name={"Sample Test"} description={"Wrong test"} />}
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
