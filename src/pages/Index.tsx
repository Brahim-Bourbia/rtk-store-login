import { Link, Outlet } from "react-router-dom";

const Index = () => {
  return (
    <div>
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
