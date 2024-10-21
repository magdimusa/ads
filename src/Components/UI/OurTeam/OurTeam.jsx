import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourTeam.scss";
import data from "../../data/teamMembers";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneIcon from "@mui/icons-material/Phone";

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <button>›</button>,
    prevArrow: <button>‹</button>,
  };

  return (
    <div className="ourteam">
      <div className="ourteam-wrapper">
        <Slider {...settings}>
          {data?.map((elem) => (
            <div key={elem.id} className="ourteam-slide">
              <div className="ourteam-picture">
                <img src={elem.image} alt="team" className="ourteam-img" />
              </div>
              <div className="ourteam-member">
                <div className="ourteam-box">
                  <h4 className="ourteam-name">{elem.name}</h4>
                  <p className="ourteam-text">{elem.position}</p>
                </div>
                <div className="ourteam-icons">
                  <a href={elem.instagram} className="ourteam-link">
                    <InstagramIcon style={{ fontSize: 24 }} />
                  </a>
                  <a href={elem.telegram} className="ourteam-link">
                    <TelegramIcon style={{ fontSize: 24 }} />
                  </a>
                  <a href={`tel:${elem.phone}`} className="ourteam-link">
                    <PhoneIcon style={{ fontSize: 24 }} />
                  </a>
                </div>
                <button className="button">Baholash</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeam;
