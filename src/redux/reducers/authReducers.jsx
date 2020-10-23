const initialState = {
  auth: false,
  avatar: "https://www.flaticon.com/premium-icon/icons/svg/3177/3177440.svg"
};
const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth: true,
        avatar: action.avatar
      };
    case "LOGOUT":
      return {
        ...state,
        auth: false,
        avatar:
          "https://www.flaticon.com/premium-icon/icons/svg/3177/3177440.svg"
      };
    default:
      return {
        ...state
      };
  }
};

export default authReducers;
