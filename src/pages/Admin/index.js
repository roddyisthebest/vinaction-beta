import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h1>관리자 페이지</h1>
      <Outlet />
    </div>
  );
};

export default Admin;
