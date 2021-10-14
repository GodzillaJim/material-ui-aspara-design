import React from "react";
import Layout from "./Layout";
import FlowOne from "./FlowOne";
import FlowTwo from "./FlowTwo";
import FlowThree from "./FlowThree";

const someRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <FlowOne />
    },
    {
      path: "/2",
      element: <FlowTwo />
    },
    {
      path: "/3",
      element: <FlowThree />
    }
  ]
};

export default someRoutes;
