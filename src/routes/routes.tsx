import Api from "@/pages/Api";
import Todos from "@/pages/Todos";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {path: "/", element: <Todos/>},
  {path: "/api", element: <Api/>},

]

export default routes;