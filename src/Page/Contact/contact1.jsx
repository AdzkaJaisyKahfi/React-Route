import React from "react";
import WithHOC from "../HOC/withHOC";

const Contact1 = (props) => {
  console.log(props);
  const { count, name, setCount } = props;

  return (
    <React.Fragment>
      <h1 className="text-primary">{count}</h1>
      <button className="btn btn-outline-warning" onClick={setCount}>
        Click Me
      </button>
      <h5 className="mt-3">{name}</h5>
    </React.Fragment>
  );
};

export default WithHOC(Contact1, 10);
