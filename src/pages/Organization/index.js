import { Outlet } from "react-router-dom";

const Organization = () => {
  return (
    <div>
      <h1>단체 페이지</h1>
      <Outlet />
    </div>
  );
};

export default Organization;
