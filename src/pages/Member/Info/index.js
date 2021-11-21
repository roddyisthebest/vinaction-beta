import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Info = () => {
  console.log("mainRenderd");

  useEffect(() => {
    console.log("one mounted!");
  }, []);

  return (
    <div>
      <h3>Info List들</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default Info;
