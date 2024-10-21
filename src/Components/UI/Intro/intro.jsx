import React, { useState, useRef } from "react";
import "./intro.scss";
import video1 from "../../../img/video1.mp4"; // Birinchi video
import video2 from "../../..//img/video2.mp4"; // Ikkinchi video

const PlayIcon = () => (
  <svg
    className="intro__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="48px"
    height="48px"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg
    className="intro__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    width="48px"
    height="48px"
  >
    <path d="M6 19h4V5H6zm8 0h4V5h-4z" />
  </svg>
);

const Intro = () => {
  // Har bir video uchun alohida holatlar
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const togglePlay1 = () => {
    if (isPlaying1) {
      videoRef1.current.pause();
    } else {
      videoRef1.current.play();
    }
    setIsPlaying1(!isPlaying1);
  };

  const togglePlay2 = () => {
    if (isPlaying2) {
      videoRef2.current.pause();
    } else {
      videoRef2.current.play();
    }
    setIsPlaying2(!isPlaying2);
  };

  return (
    <div className="intro">
      <div className="intro__container">
        <div className="intro__wrapper">
          <div className="intro__content">
            <h1 className="intro__title">
              Xizmatlarimiz bilan to'liq tanishib chiqing...
            </h1>
            {/* <h1 className="intro__title">Yangi natijalarga erisha olmaysiz...</h1> */}
            <button className="button">Konsultatsiya olish</button>
          </div>
          <div
            className="intro__video-container"
            onMouseEnter={() => setIsHovering1(true)}
            onMouseLeave={() => setIsHovering1(false)}
          >
            <video className="intro__video" ref={videoRef1} loop>
              <source src={video1} type="video/mp4" />
            </video>
            {(isHovering1 || !isPlaying1) && (
              <div className="intro__icon-container" onClick={togglePlay1}>
                {isPlaying1 ? <PauseIcon /> : <PlayIcon />}
              </div>
            )}
          </div>
          {/* <div
          className="intro__video-container"
          onMouseEnter={() => setIsHovering2(true)}
          onMouseLeave={() => setIsHovering2(false)}
        >
          <video className="intro__video" ref={videoRef2} loop>
            <source src={video2} type="video/mp4" />
          </video>
          {(isHovering2 || !isPlaying2) && (
            <div className="intro__icon-container" onClick={togglePlay2}>
              {isPlaying2 ? <PauseIcon /> : <PlayIcon />}
            </div>
          )}
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
