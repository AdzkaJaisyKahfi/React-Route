import axios from "axios";

export const login = () => {
  return (dispatch) => {
    return axios
      .get("https://reqres.in/api/users/2")
      .then((response) => {
        const avatar = response.data.data.avatar;
        dispatch(auth(avatar));
      })
      .catch((error) => {
        console.log("ok");
      });
  };
};

export const auth = (avatar) => {
  return {
    type: "LOGIN",
    avatar: avatar
  };
};
