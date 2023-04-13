import { Outlet, Link, Route, Routes } from "react-router-dom";
import Albums from "./Albums";

const Layout = () => {
  return (
    <>
      <Link to="/users">Users</Link>
    </>
  )
};

export default Layout;