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
        console.log("Ok");
      });
  };
};

export const auth = (avatar) => {
  return {
    type: "LOGIN",
    avatar: avatar
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
    avatar: "https://www.flaticon.com/premium-icon/icons/svg/3177/3177440.svg"
  };
};
