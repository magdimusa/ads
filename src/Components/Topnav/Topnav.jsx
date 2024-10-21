import React, { useState, useEffect } from "react";
import "./topnav.scss";
import uz from "../../img/uz.png";
import en from "../../img/en.png";
import ru from "../../img/ru.png";
import logo from "../../img/logotip.png";

const Topnav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load mode from localStorage on component mount
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      className={`header-top p-2 ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="container">
        <div className="logo-wrapper">
          <a href="/" className="logo">
            <img alt="in out" width="83" height="72" src={logo} />
          </a>
          <div className="header-top-wrapper">
            <div className="advertasing"></div>
            <div className="link">
              <a
                target="_blank"
                className="link-btn one"
                href="https://t.me/My_VALLEY"
              >
                <img
                  src="https://www.inoutads.uz/_nuxt/telegram.61463358.svg"
                  alt="telegram"
                  width="20"
                  height="20"
                />
                <p className="link-text">Telegram</p>
              </a>
              <button className="link-btn three">
                <img
                  src="https://www.inoutads.uz/_nuxt/download.5c2f07e8.svg"
                  alt="download"
                  width="20"
                  height="20"
                />
                <p className="link-text">Taqdimot (35 mb)</p>
              </button>
              <a href="#registration" className="link-btn three">
                <img
                  src="https://www.inoutads.uz/_nuxt/sms.32d91e6a.svg"
                  alt="download"
                  width="20"
                  height="20"
                />
                <p className="link-text">Arizangizni yuboring</p>
              </a>
            </div>
          </div>
        </div>
        <div className="languages desktop">
          <div className="menu-languages">
            <a href="/#comments" className="language-item">
              <img src={uz} alt="flag" /> uz
            </a>
            <a href="/en#comments" className="language-item">
              <img src={en} alt="flag" /> en
            </a>
            <a href="/ru#comments" className="language-item">
              <img src={ru} alt="flag" /> ru
            </a>
          </div>
        </div>
        <div className="theme-toggle">
          <span className="icon-moon">🌙</span>
          <label className="toggle-switch">
            <input
              type="checkbox"
              id="theme-toggle-checkbox"
              onChange={toggleDarkMode}
            />
            <span className="slider"></span>
          </label>
          <span className="icon-sun">☀️</span>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
