import React from "react";
import design from "../images/design.svg";
import intelligence from "../images/intelligence.svg";
import game from "../images/game-dev.svg";
import Title from "../components/Title";
import ImageSection from "../components/ImageSection";
import SkillSection from "../components/SkillSection";
import ServicesSection from "../components/ServicesSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title="About Me" span="About Me" />
      <ImageSection />
      <Title title="My Skills" span="My Skills" />
      <div className="skills-container">
        <SkillSection skill="JavaScript" progress="60%" width="60%" />
        <SkillSection skill="Java" progress="80%" width="80%" />
        <SkillSection skill="Dart" progress="60%" width="60%" />
        <SkillSection skill="Flutter" progress="70%" width="70%" />
        <SkillSection skill="React JS" progress="40%" width="40%" />
        <SkillSection skill="Node JS" progress="50%" width="50%" />
        <SkillSection skill="Web Development" progress="50%" width="50%" />
        <SkillSection
          skill="Mobile App Development"
          progress="90%"
          width="90%"
        />
      </div>
      <Title title="Services" span="Services" />
      <div className="services-container">
        <ServicesSection
          image={design}
          title="Web design"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,"
        />
        <ServicesSection
          image={intelligence}
          title="Artificial Intelligence"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,"
        />
        <ServicesSection
          image={game}
          title="Game Development"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,"
        />
      </div>
    </div>
  );
}

export default AboutPage;
