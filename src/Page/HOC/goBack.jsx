import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = (props) => {
  console.log("goBack", props);

  const RedirectHandle = () => {
    props.history.push("/");
  };

  const goBackHandle = () => {
    props.history.goBack();
  };

  return (
    <React.Fragment>
      <div className="mt-3">
        <button className="btn btn-warning mr-2" onClick={RedirectHandle}>
          Redirect
        </button>
        <button className="btn btn-danger" onClick={goBackHandle}>
          Back
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(GoBack);
