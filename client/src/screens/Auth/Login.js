import React from "react";
import "./Auth.css";
import { LoginWrapper } from "../../style-component/Wrapper";
import IconInput from "../../components/inputs/IconInput";
// import { Helmet } from "react-helmet";
import PurpalButton from "../../components/buttons/PurpalButton";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <div className="auth-Wrapper">
        <div className="">
          <div className="d-flex justify-content-center">
            <img
              src="./assest/svg/logo.png"
              alt="logo"
              className="logo-dimension"
            />
          </div>
          <div className="auth-info text-center my-4">
            <h4 className="is-font-18 is-font-w-600 ">Sign in</h4>
            <p className="is-font-14 my-3 is-color-secondary">
              Sign in to continue to Chatvia.
            </p>
          </div>

          <LoginWrapper>
            <form action="">
              <IconInput
                label="Email"
                icon="bx bx-envelope"
                placeholder="Enter Your Email"
              />
              <IconInput
                label="Password"
                icon="bx bx-lock"
                placeholder="Enter Your Password"
              />

              <div className="mb-3 form-check my-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  className="form-check-label is-font-14 is-font-w-600"
                  htmlFor="exampleCheck1 "
                >
                  Remember me
                </label>
              </div>

              <PurpalButton label="Login" />
            </form>
          </LoginWrapper>

          <div className="text-center">
            <p className="is-font-16 my-3 is-color-secondary my-4 ">
              Don't have an account ?{" "}
              <Link to="/signup" className="is-color-primary is-font-w-600">
                Signup now
              </Link>
            </p>

            <p className="is-font-16 my-3 is-color-secondary my-4 ">
              © 2024 Ping. Crafted. Crafted with by Themesbrand
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
