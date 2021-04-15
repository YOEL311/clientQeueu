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
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

const addNewCustomer = (name) => {
  return async (dispatch, getState) => {
    const token = getState().token;
    if (!token) {
      // display error
      return;
    }

    const config = {
      method: "POST",
      url: "/api/queue/add",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        queue: {
          fullName: name,
        },
      },
    };
    axios(config)
      .then(function (response) {
        dispatch(getListQueueSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const login = (userName, password) => {
  return async (dispatch) => {
    var data = JSON.stringify({
      user: {
        email: userName,
        password,
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
        dispatch(loginSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const getListQueueSuccess = (data) => {
  data.sort((a, b) => a.id - b.id);
  return {
    type: GET_LIST_QUEUE_SUCCESS,
    payload: data,
  };
};
const getListQueue = () => {
  return async (dispatch, getState) => {
    const token = getState().token;
    if (!token) {
      // display error
      return;
    }

    var config = {
      method: "get",
      url: "/api/queue/getList",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        dispatch(getListQueueSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

const resetTable = () => {
  return async (dispatch, getState) => {
    const token = getState().token;
    if (!token) {
      // display error
      return;
    }
    var config = {
      method: "get",
      url: "/api/queue/resetTable",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
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
    if (!token) {
      // display error
      return;
    }
    var config = {
      method: "POST",
      url: "/api/queue/nextQueue",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then(function (response) {
        dispatch(getListQueueSuccess(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export {
  toggleTheme,
  login,
  nextQueue,
  getListQueue,
  addNewCustomer,
  resetTable,
};
