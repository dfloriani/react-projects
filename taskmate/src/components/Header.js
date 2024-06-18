import Kumamon from "../assets/kumamon.jpg";
import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Kumamon} alt="kumamon" />
        <h1>Taskmate</h1>
      </div>
      <div className="themes">
        <div
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "circle dark active" : "circle dark"}
        ></div>
        <div onClick={() => setTheme("grey")}
        className={theme === "grey" ? "circle grey active" : "circle grey"}></div>
        <div className="circle light" onClick={() => setTheme("light")}></div>
        <div className="circle theme1" onClick={() => setTheme("theme1")}></div>
        <div className="circle theme2"></div>
      </div>
    </header>
  );
}
