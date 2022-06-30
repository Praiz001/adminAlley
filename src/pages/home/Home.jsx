import React from "react";
import "./home.scss";
import NavBar from "../../components/navbar/NavBar";

import SideBar from "../../components/sidebar/SideBar";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homecontainer">
        <NavBar />
        Home Container
      </div>
    </div>
  );
};

export default Home;
