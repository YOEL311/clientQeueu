import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./component/Login";
import Qeueu from "./component/Qeueu";
import Layout from "./component/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact={true} path="/qeueu" component={Qeueu} />
        <Route exact={true} path="/" component={Login} />
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default Router;
