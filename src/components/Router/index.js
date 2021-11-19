import { useRoutes, Outlet, Route, Routes, Link } from "react-router-dom";

import Home from "../../pages/Home";
import Signin from "../../pages/Sign/SignIn";
import SignoutMember from "../../pages/Sign/SignOut/Member/index";
import SignoutOg from "../../pages/Sign/SignOut/Organization/index";
import User from "../../pages/User";
import Main from "../../pages/User/Main";
import Community from "../../pages/User/Main/Community";
import Recommend from "../../pages/User/Main/Recommend";

const routes = [
  { path: "/", element: Home },
  { path: "/signin", element: Signin },
  { path: "/signout/member", element: SignoutMember },
  { path: "/signout/organization", element: SignoutOg },
  {
    path: "/user",
    element: User,
    children: [
      {
        path: "",
        element: <Main></Main>,
        children: [
          { path: "community", element: <Community /> },
          { path: "recommend", element: <Recommend /> },
        ],
      },
      
    ],
  },
];

export default function EntireRouter() {
  let element = useRoutes(routes);

  return (
    <div>
      <h1>fuu!</h1>
      {element}
    </div>
  );
}
