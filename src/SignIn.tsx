import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BrowserRouter as Router, Route } from "react-router-dom";
function SignIn() {
  const [Input, setInput] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });
  return (
    <div className="container-fluid" style={{ height: 600 }}>
      <div className="row d-flex">
        <div className="col-lg-3 col-xl-3 col-md-1 col-sm-1 col-xs-1"></div>
        <div className="col-lg-6 col-xl-6 col-md-10 col-sm-10 col-xs-10">
          <div className="row d-flex flex-column justify-content-center align-items-center w-100 m-0 p-0">
            <div className="col d-flex  justify-content-center align-items-center pt-4 w-100">
              <h1 style={{ userSelect: "none", color: "#a6b0ba" }}>PlatformX</h1>
            </div>

            <div
              className="col-9 d-flex flex-column  justify-content-center"
              style={{ height: 500 }}
            >
              <Formik
                initialValues={{ email: "", password: "" }}
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
                  // handle sign in
                  //   const result = await handeSignIn(
                  //     values.email,
                  //     values.password
                  //   );
                  //   if (result === "Successfull") {
                  // successfully signed in
                  // go to home page
                  // history.replace("/");
                  //   } else {
                  //     alert(result.message);
                  //   }
                  //   setSubmitting(false);
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
                      <Field
                        type="email"
                        name="email"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
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
                      <Field
                        type="password"
                        name="password"
                        class="form-control"
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
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
