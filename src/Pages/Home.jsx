import React from "react";
import "../styles/home.scss";
import In from "../Components/UI/In/In";
import Map from "../Components/UI/Map/Map";
import Video from "../Components/UI/Video/Video";
import Bisness from "../Components/UI/Bissness/Bisness";
import Clients from "../Components/UI/Clients/Clients";

const Home = () => {
  return (
    <div className="home">
      <Map />
      <In />
      <Video />
      <Bisness />
      <Clients />
    </div>
  );
};

export default Home;
