import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./Utils/Axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./Pages/Editor";
import Header from "./Components/Header";

import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
function App() {
  const [Problem, setProblem] = useState<any>({});
  const [loading, setloading] = useState(true);

  const isLoggedIn = () => {
    return localStorage.getItem("access_token") !== ""
      ? true
      : localStorage.getItem("access_token") !== null
      ? true
      : false;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:id" element={<Editor />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
