import React from "react";
import about from "../images/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am
          <span> Ogwo Chinaza Ogwo</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolor
          necessitatibus a laboriosam accusamus ducimus architecto possimus
          excepturi nostrum nam explicabo, quaerat saepe, quod iusto. Unde sint
          inventore aliquid soluta?
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Ogwo Chinaza Ogwo</p>
            <p>: 23</p>
            <p>: Nigeria</p>
            <p>: Spanish, English, Igbo</p>
            <p>: Umuahia</p>
            <p>: Spain, Germany, Canada, Nigeria</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  );
}

export default ImageSection;
