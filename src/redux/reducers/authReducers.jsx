const initialState = {
  auth: false,
  avatar: "https://www.flaticon.com/premium-icon/icons/svg/373/373582.svg"
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
        auth: false
      };
    default:
      return {
        ...state
      };
  }
};

export default authReducers;
