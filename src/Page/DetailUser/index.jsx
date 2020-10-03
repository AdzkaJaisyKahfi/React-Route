import React from "react";
import Axios from "axios";
import Navbar from "../../Page/Navbar";
import { config } from "../../config";
import { useParams, Link } from "react-router-dom";

const DetailUser = (props) => {
  let { id } = useParams();
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      let response = await Axios.get(`${config.api_host}/users/${id}`);
      setUser(response.data.data);
    } catch {
      console.log("Error");
    }
  };

  const NextHandle = () => {
    let nextId = parseInt(id, 10) + 1;
    props.history.push(`/DetailUser/${nextId}`);
    console.log(nextId);
  };

  const PrevHandle = () => {
    let prevId = parseInt(id, 10) - 1;
    props.history.push(`/DetailUser/${prevId}`);
    console.log(prevId);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <img className="rounded-circle mt-3" src={user.avatar} alt="" />
        <h3>
          {user.first_name} {user.last_name} {""}
        </h3>
        <h4>{user.email}</h4>
        <div>
          <button
            disabled={id < 2}
            onClick={PrevHandle}
            className="btn btn-success mr-2"
          >
            Previous
          </button>
          <button onClick={NextHandle} className="btn btn-primary">
            Next
          </button>
          <Link to="/">
            <button className="btn btn-danger ml-2">Back</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailUser;
