import { Outlet } from "react-router-dom";

const Chats = () => {
  return (
    <div>
      <h1>Chats</h1>
      <Outlet />
    </div>
  );
};

export default Chats;
