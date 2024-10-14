import React from "react";
import "./bisness.scss";
import bus from "../../../img/bus.jpeg";
import cat from "../../../img/kat.png";
import nike from "../../../img/snakers.jpg";
import byd from "../../../img/bydsong.png";
import uchd from "../../../img/3d.jpeg";
import bird from "../../../img/3dd.jpg";
import Slider from "react-slick";

const Bisness = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="biznima">
     <div className="biznima_wrapper">
     <h2 className="biznima__title">Biz nima qilamiz?</h2>
      <div className="biznima__cards">
        <Slider className="biznima_slider" {...settings}>
          <div className="biznima__card">
            <img
              src={bus}
              alt="LED ekranda reklama"
              className="biznima__card-image"
            />
            <div className="biznima__card-content">
              <h3 className="biznima__card-title">LED ekranlarda reklama</h3>
              <p className="biznima__card-text">
                Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta
                matnidir.
              </p>
              <button className="biznima__card-button">Ko'proq</button>
            </div>
          </div>
          <div className="biznima__card">
            <img
              src={cat}
              alt="Reklama xizmati"
              className="biznima__card-image"
            />
            <div className="biznima__card-content">
              <h3 className="biznima__card-title">Reklama xizmati</h3>
              <p className="biznima__card-text">
                Kompaniya tashqi reklama sohasida eng keng ko'lamli xizmatlarni
                taqdim etishga...
              </p>
              <button className="biznima__card-button">Ko'proq</button>
            </div>
          </div>
          <div className="biznima__card">
            <img
              src={nike}
              alt="LED ekranda reklama"
              className="biznima__card-image"
            />
            <div className="biznima__card-content">
              <h3 className="biznima__card-title">LED ekranlarda reklama</h3>
              <p className="biznima__card-text">
                Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta
                matnidir.
              </p>
              <button className="biznima__card-button">Ko'proq</button>
            </div>
          </div>
          <div className="biznima__card">
            <img
              src={byd}
              alt="Reklama xizmati"
              className="biznima__card-image"
            />
            <div className="biznima__card-content">
              <h3 className="biznima__card-title">Reklama xizmati</h3>
              <p className="biznima__card-text">
                Kompaniya tashqi reklama sohasida eng keng ko'lamli xizmatlarni
                taqdim etishga...
              </p>
              <button className="biznima__card-button">Ko'proq</button>
            </div>
          </div>
          <div className="biznima__card">
            <img
              src={uchd}
              alt="LED ekranda reklama"
              className="biznima__card-image"
            />
            <div className="biznima__card-content">
              <h3 className="biznima__card-title">LED ekranlarda reklama</h3>
              <p className="biznima__card-text">
                Lorem Ipsum matbaa va matn terish sanoatining oddiygina soxta
                matnidir.
              </p>
              <button className="biznima__card-button">Ko'proq</button>
            </div>
          </div>
          <div className="biznima__card">
            <img
              src={bird}
              alt="Reklama xizmati"
              className="biznima__card-image"
            />
            <div className="biznima__card-content">
              <h3 className="biznima__card-title">Reklama xizmati</h3>
              <p className="biznima__card-text">
                Kompaniya tashqi reklama sohasida eng keng ko'lamli xizmatlarni
                taqdim etishga...
              </p>
              <button className="biznima__card-button">Ko'proq</button>
            </div>
          </div>
        </Slider>
      </div>
     </div>
    </div>
  );
};

export default Bisness;
