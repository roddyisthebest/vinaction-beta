import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Community = () => {
  const [hello, setHello] = useState("1q2");

  return (
    <div>
      <h5>main-community</h5>
      <p>{hello}</p>
      <button onClick={() => setHello("hoho")}>setChange</button>
    </div>
  );
};

export default Community;
