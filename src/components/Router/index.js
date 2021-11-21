import { useRoutes } from "react-router-dom";

import Home from "../../pages/Home";
import Signin from "../../pages/Sign/SignIn";
import SignupMember from "../../pages/Sign/SignUp/Member/index";
import SignupOg from "../../pages/Sign/SignUp/Organization/index";
import Member from "../../pages/Member";
import Main from "../../pages/Member/Main";
import Community from "../../pages/Member/Main/Community";
import Recommend from "../../pages/Member/Main/Recommend";
import Chats from "../../pages/Member/Chats";
import ChatsHome from "../../pages/Member/Chats/Home";
import ChatsDetail from "../../pages/Member/Chats/Detail";

import Info from "../../pages/Member/Info";
import InfoHome from "../../pages/Member/Info/Home";
import MyInfo from "../../pages/Member/Info/MyInfo";
import Selected from "../../pages/Member/Info/Selected";

import Club from "../../pages/Member/Club";
import ClubHome from "../../pages/Member/Club/Home";
import NewFeed from "../../pages/Member/Club/NewFeed";
import Search from "../../pages/Member/Club/Search";
import ClubDetail from "../../pages/Member/Club/Detail";
import ClubDetailHome from "../../pages/Member/Club/Detail/Home";
import ClubMember from "../../pages/Member/Club/Detail/Members";
import ClubSetting from "../../pages/Member/Club/Detail/Setting";
import Organization from "../../pages/Organization";
import OrganizaionHome from "../../pages/Organization/Home";
import OrganizationEnrollment from "../../pages/Organization/Enrollment";
import OrganizationDetailList from "../../pages/Organization/DetailList";
import OrganizationDetail from "../../pages/Organization/Detail";
import OrganizationV from "../../pages/Organization/Volunteer";

import Admin from "../../pages/Admin";
import Login from "../../pages/Admin/Login";
import WaitingList from "../../pages/Admin/WaitingList";
import AdminDetail from "../../pages/Admin/Detail";

const routes = [
  { path: "/", element: Home },
  { path: "/signin", element: Signin },
  { path: "/signup/member", element: SignupMember },
  { path: "/signup/organization", element: SignupOg },
  {
    path: "/member",
    element: Member,
    children: [
      {
        path: "",
        element: <Main></Main>,
        children: [
          { path: "community", element: <Community /> },
          { path: "recommend", element: <Recommend /> },
        ],
      },
      {
        path: "club",
        element: <Club />,
        children: [
          {
            path: ":id",
            element: <ClubDetail />,
            children: [
              { path: "", element: <ClubDetailHome /> },
              { path: "member", element: <ClubMember /> },
              { path: "setting", element: <ClubSetting /> },
            ],
          },
          { path: "", element: <ClubHome /> },
          { path: "newFeed", element: <NewFeed /> },
          { path: "search", element: <Search /> },
        ],
      },
      {
        path: "chats",
        element: <Chats></Chats>,
        children: [
          { path: "", element: <ChatsHome /> },
          { path: "detail/:id", element: <ChatsDetail /> },
        ],
      },
      {
        path: "info",
        element: <Info />,
        children: [
          { path: "", element: <InfoHome /> },
          { path: "MyInfo/:id", element: <MyInfo /> },
          {
            path: "applications/:id",
            element: <Selected selectedType={"applications"} />,
          },
          {
            path: "reservations/:id",
            element: <Selected selectedType={"reservations"} />,
          },
          {
            path: "historys/:id",
            element: <Selected selectedType={"historys"} />,
          },
        ],
      },
    ],
  },
  {
    path: "/organization",
    element: <Organization></Organization>,
    children: [
      { path: "", element: <OrganizaionHome /> },
      { path: "enrollment", element: <OrganizationEnrollment /> },
      { path: "detailList", element: <OrganizationDetailList /> },
      { path: "detail/:id", element: <OrganizationDetail /> },
      {
        path: "volunteer/approve/:id",
        element: <OrganizationV types={"approve"} />,
      },
      {
        path: "volunteer/recognition/:id",
        element: <OrganizationV types={"recognition"} />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "login", element: <Login /> },
      { path: "", element: <WaitingList /> },
      { path: "detail/:id", element: <AdminDetail /> },
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
