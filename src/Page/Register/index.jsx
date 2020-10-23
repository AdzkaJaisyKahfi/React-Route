import React from "react";
import { Input, Button } from "../../Property/Form";
import { Link } from "react-router-dom";
import Axios from "axios";
import { config } from "../../config";

const Register = (props) => {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    Post();
  };
  const Post = async () => {
    const url = `${config.api_host}/register`;
    const payload = {
      email: email,
      password: password
    };
    console.log(url);
    console.log(payload);

    try {
      let response = await Axios.post(url, payload);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      props.history.push("/");
    } catch {
      console.log("Error");
    }
  };
  return (
    <React.Fragment>
      <div className="row">
        <div className="d-flex justify-content-center mt-3">
          <div class="card border-success">
            <div class="card-header bg-transparent border-success text-success">
              Form Registrasi
            </div>
            <div class="card-body text-success">
              <h5 class="card-title">
                <form onSubmit={onSubmit}>
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    label={"Email Address"}
                    className="form-control"
                  />
                  <Input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    label={"Password"}
                    value={password}
                    className="form-control"
                  />
                  <Button
                    className="form-control btn btn-success"
                    label={"Register"}
                  />
                </form>
              </h5>
              <p class="card-text">
                <div className="row">
                  <div className="col">
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none"
                      }}
                    >
                      Login
                    </Link>
                  </div>
                  <div className="col">
                    <Link
                      to="/about"
                      style={{
                        textDecoration: "none"
                      }}
                    >
                      About
                    </Link>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
