import { RouteObject } from "react-router-dom";
import React, { Suspense } from "react";

const Index = React.lazy(() => import("../pages/Index"));
const Home = React.lazy(() => import("../pages/Home"));
const ProductList = React.lazy(() => import("../pages/ProductList"));
const Product = React.lazy(() => import("../pages/Product"));

const routes: RouteObject[] = [
  {
    path: "",
    element: (
      <Suspense fallback={"loading ..."}>
        <Index />
      </Suspense>
    ),
    loader: () => <h1>loading...</h1>,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={"loading ..."}>
            <Home />
          </Suspense>
        ),
        loader: () => <p>loading view...</p>,
      },
      {
        path: "products",
        element: (
          <Suspense fallback={"loading ..."}>
            <ProductList />
          </Suspense>
        ),
        loader: () => <p>loading view...</p>,
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={"loading ..."}>
            <Product />
          </Suspense>
        ),
        loader: () => <p>loading view...</p>,
      },
    ],
  },
];

export default routes;
