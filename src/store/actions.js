import axios from "axios";
import { TOGGLE_THEME } from "./types";

axios.defaults.baseURL = "http://localhost:3000";

const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};

const login = () => {
  return async (dispatch, getstate) => {
    // const key = getstate().preferUser.itemSelected.Key;

    // var axios = require('axios');
    var data = JSON.stringify({
      user: {
        email: "admin",
        password: "admin",
        username: "admin",
      },
    });

    var config = {
      method: "post",
      url: "/api/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    // const res = await myFetch(
    //   `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_ACCU_WEATHER_API_KEY}`
    // );
    // fetchDataSuccess(dispatch, res);
  };
};

export { toggleTheme, login };
