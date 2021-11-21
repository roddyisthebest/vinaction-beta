import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Main = () => {
  console.log("mainRenderd");

  useEffect(() => {
    console.log("one mounted!");
  }, []);

  return (
    <div>
      <h3>user-main</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
