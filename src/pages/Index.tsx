import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Login from "./Login";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const Index = () => {
  const { token, id } = useSelector((state: RootState) => state.authentication);

  return !token ? (
    <Login />
  ) : (
    <div>
      hello userId :, {id}
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>ProductList</Link>
        </li>
      </ul>
      <main className="container content">
        <Outlet />
      </main>
    </div>
  );
};

export default Index;
