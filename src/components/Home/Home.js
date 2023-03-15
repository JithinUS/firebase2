import React from "react";
import { Link ,  useLocation } from "react-router-dom";

function Home(props) {

  const location = useLocation();
  const { name } = location.state || ''

  console.log("name =",name);

  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
