"use client";

import React from "react";
import { Element } from "react-scroll";
import scss from "./About.module.scss";

const About = () => {
  const aboutText = {
    text1:
      "Hi! My name is Abdurahman, and I am a beginner frontend developer. My passion is creating beautiful anduser-friendly web applications that delight users. I am always striving to learn new technologies and improve my skills in order to create better solutions for my projects.",
    text2:
      "My goals are to continue growing in development, explore new frameworks and libraries, and work on projects that have real value and can improve users' everyday lives.",
    text3:
      "I am always open to new opportunities, collaborations, and projects where I can apply my knowledge and skills to solve interesting challenges.",
  };
  return (
    <Element name="about">
      <section className={scss.About}>
        <div className="container_for_content">
          <div className={scss.content}>
            <div className={scss.about_me_container}>
              <div className={scss.about_me_text}>
                <h1>
                  About <span>Me</span>
                </h1>
                <div className={scss.text}>
                  <p>{aboutText.text1}</p>
                  <p>{aboutText.text2}</p>
                  <p>{aboutText.text3}</p>
                </div>

                <div className={scss.skills}></div>
              </div>
            </div>

            <div className={scss.about_me_img}>
              <div className={scss.my_img}></div>
              <div className={scss.img_border}></div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
