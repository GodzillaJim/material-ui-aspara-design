import { useRoutes } from "react-router-dom";
import someRoutes from "../screens";

const routes = () => {
  return useRoutes([someRoutes]);
};

export default routes;
