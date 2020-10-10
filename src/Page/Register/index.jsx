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
        <div className="col-8"></div>
        <div className="col-4 p-4">
          <h4>Form Registrasi</h4>
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
          <div className="row mt-3">
            <div className="col">
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div className="col">
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
