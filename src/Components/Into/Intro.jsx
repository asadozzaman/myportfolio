import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am </span>
          <span>Asado zzaman</span>
          <span>
            Frontend and Backend Developer with few year working experience in
            web designing and developement, producting the quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        <div>
        <FloatinDiv img={crown} text1="Web" text2="Developer" />
        <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
