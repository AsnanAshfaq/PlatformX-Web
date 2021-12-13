import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import axios from "../Utils/Axios";
// import axios from "axios";

function SignIn() {
  const [Input, setInput] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });
  let navigate = useNavigate();

  const handleSignIn = () => {
    // make axios call

    const data = {
      email: Input.email.value,
      password: Input.password.value,
    };
    console.log("Data is", data);
    axios
      .post("/user/signin/", data)
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        navigate("/");
      })
      .catch((error: any) => {
        if (error.response) {
          alert(error.response.data.error);
        }
        return error.response;
      });
  };
  return (
    <div className="container-fluid" style={{ height: 600 }}>
      <div className="row d-flex">
        <div className="col-lg-3 col-xl-3 col-md-1 col-sm-1 col-xs-1"></div>
        <div className="col-lg-6 col-xl-6 col-md-10 col-sm-10 col-xs-10">
          <div className="row d-flex flex-column justify-content-center align-items-center w-100 m-0 p-0">
            <div className="col d-flex  justify-content-center align-items-center pt-4 w-100">
              <h1 style={{ userSelect: "none", color: "#a6b0ba" }}>
                PlatformX
              </h1>
            </div>

            <div
              className="col-9 d-flex flex-column  justify-content-center"
              style={{ height: 500 }}
            >
              <Formik
                initialValues={{
                  email: Input.email.value,
                  password: Input.password.value,
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.password) {
                    Input.password.error = "Password is Required";
                  }
                  if (!values.email) {
                    Input.email.error = "Email is Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    Input.email.error = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                  handleSignIn();
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="input-group input-group-sm mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Email
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon1"
                        onChange={(e) =>
                          setInput((props) => {
                            return {
                              ...props,
                              email: {
                                value: e.target.value,
                                error: "",
                              },
                            };
                          })
                        }
                      />
                    </div>
                    <ErrorMessage name="email" component="div" />
                    <div className="input-group input-group-sm mb-3">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroup-sizing-sm"
                        >
                          Password
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                        onChange={(e) =>
                          setInput((props) => {
                            return {
                              ...props,
                              password: {
                                value: e.target.value,
                                error: "",
                              },
                            };
                          })
                        }
                      />
                    </div>
                    <ErrorMessage name="password" component="div" />
                    <div className="input-group input-group-sm mb-3 mt-3">
                      <button
                        className="btn btn-secondary w-100 p-2"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Sign In
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xl-3 col-md-1 col-sm-1 col-xs-1"></div>
      </div>
    </div>
  );
}

export default SignIn;
