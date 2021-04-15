import { TOGGLE_THEME, LOGIN_SUCCESS, GET_LIST_QUEUE_SUCCESS } from "./types";
const init = {
  theme: "right",
  user: null,
  queue: null,
  token: null,
};

function reducer(state = init, action) {
  console.log("🚀 ~ file: reducer.js ~ line 10 ~ reducer ~ action", action);
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, them: state.them === "dark" ? "light" : "dark" };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case GET_LIST_QUEUE_SUCCESS: {
      return { ...state, queue: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
