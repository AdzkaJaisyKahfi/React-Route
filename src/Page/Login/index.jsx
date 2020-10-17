import React from "react";
import { Input, Button } from "../../Property/Form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const loginHandle = () => {
    dispatch(login());
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="d-flex justify-content-center mt-3">
          <div class="card border-success">
            <div class="card-header bg-transparent border-success text-success">
              Form Login
            </div>
            <div class="card-body text-success">
              <h5 class="card-title">
                <form>
                  <Input label={"Email Address"} className="form-control" />
                  <Input label={"Password"} className="form-control" />
                  <Button
                    onClick={loginHandle}
                    className="form-control btn btn-success"
                    label={"Login"}
                  />
                </form>
              </h5>
              <p class="card-text">
                <div className="col">
                  <Link
                    to="/register"
                    style={{
                      textDecoration: "none",
                      color: ""
                    }}
                  >
                    Register
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
