import { Route, Routes } from "react-router-dom";
import Dashboard from "../modules/Dashboard/Dashboard";
import Login from "../modules/Login/Login";
import Signup from "../modules/Signup/Signup";
import { routes } from "./config";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.root} element={<Dashboard />} />
      <Route path={routes.signup} element={<Signup />} />
      <Route path={routes.login} element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
