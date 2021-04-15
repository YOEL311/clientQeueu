import axios from "axios";
import { TOGGLE_THEME, LOGIN_SUCCESS, GET_LIST_QUEUE_SUCCESS } from "./types";

// axios.defaults.baseURL = "http://127.0.0.1:3000";
axios.defaults.baseURL = "https://queue-manager-yoel.herokuapp.com";

const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};

const loginSuccess = (data) => {
  console.log("🚀 ~ file: actions.js ~ line 13 ~ loginSuccess ~ data", data);
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const addNewCustomer = (name) => {
  return async (dispatch, getState) => {
    console.log(
      "🚀 ~ file: actions.js ~ line 21 ~ addNewCustomer ~ name",
      name
    );
    const token = getState().token;
    console.log("🚀 ~ file: actions.js ~ line 27 ~ return ~ token", token);

    if (!token) {
      // display error
      return;
    }

    // const data = JSON.stringify({
    //   queue: {
    //     fullName: name,
    //   },
    // });
    // console.log("🚀 ~ file: actions.js ~ line 40 ~ return ~ data", data);

    const config = {
      method: "POST",
      url: "/api/queue/add",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // data: data,

      data: {
        queue: {
          fullName: name,
        },
      },
    };
    console.log("🚀 ~ file: actions.js ~ line 51 ~ return ~ config", config);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const login = (email, password) => {
  return async (dispatch) => {
    // const key = getstate().preferUser.itemSelected.Key;
    var data = JSON.stringify({
      user: {
        email: "admin",
        password: "admin",
      },
    });

    const config = {
      method: "POST",
      url: "/api/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch(loginSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getListQueueSuccess = (data) => {
  return {
    type: GET_LIST_QUEUE_SUCCESS,
    payload: data,
  };
};
const getListQueue = () => {
  return async (dispatch, getState) => {
    const token = getState().token;
    console.log("🚀 ~ file: actions.js ~ line 58 ~ return ~ token", token);
    // TODO: add get current Queue
    if (!token) {
      // display error
      return;
    }
    // var data = "";

    var config = {
      method: "get",
      url: "/api/queue/getList",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        dispatch(getListQueueSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const nextQueue = () => {
  return async (dispatch, getState) => {
    const token = getState().token;
    console.log("🚀 ~ file: actions.js ~ line 134 ~ return ~ token", token);
    // TODO: add get current Queue
    if (!token) {
      // display error
      return;
    }
    // const data = JSON.stringify({
    //   queue: {
    //     currentQueue: 1,
    //   },
    // });

    var config = {
      method: "POST",
      url: "/api/queue/nextQueue",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // data: data,

      // data: {
      //   queue: {
      //     currentQueue: 1,
      //   },
      // },
    };
    console.log("🚀 ~ file: actions.js ~ line 154 ~ return ~ config", config);

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export { toggleTheme, login, nextQueue, getListQueue, addNewCustomer };
