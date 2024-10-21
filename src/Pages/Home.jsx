import React from "react";
import "../styles/home.scss";
import In from "../Components/UI/In/In";
import Map from "../Components/UI/Map/Map";
import Video from "../Components/UI/Video/Video";
import Bisness from "../Components/UI/Bissness/Bisness";
import Clients from "../Components/UI/Clients/Clients";
import Contact from "../Pages/Contact";
import OurTeam from "../Components/UI/OurTeam/OurTeam";
import Stats from "../Components/UI/Stats/Stats";
import Comments from "../Components/UI/Comments/Comments";
import Intro from "../Components/UI/Intro/intro";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Map />
      <In />
      <Video />
      <Bisness />
      <OurTeam />
      <Stats />
      <Clients />
      <Contact />
      <Comments />
    </div>
  );
};

export default Home;
