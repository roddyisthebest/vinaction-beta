import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Main = () => {
  console.log("mainRenderd");

  useEffect(() => {
    console.log("one mounted!");
  }, []);

  return (
    <div>
      <h1>user-main</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
