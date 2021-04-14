import { TOGGLE_THEME } from "./types";
const init = {
  theme: "right",
};

function reducer(state = init, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, them: state.them === "dark" ? "light" : "dark" };
    default:
      return state;
  }
}

export default reducer;
