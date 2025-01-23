import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import skillsAnimation from "../../assets/lottie/code";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={skillsAnimation} />
            ) : (
              <img
                alt="Man Working"
                src={
                  require("../../assets/images/developerActivity.svg").default
                }
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h2 className="skills-heading">{skillsSection.title}</h2>
            <p className="subTitle skills-text-subtitle">
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map(({headline, subheading}, i) => {
                return (
                  <div key={i}>
                    <h3 className="skills-headline">{headline}</h3>
                    <p className="subTitle skills-text">{subheading}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
