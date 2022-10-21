import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import hero_img from "../../assets/hero_image.png";
import hero_img_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const trasition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="hero-left">
        <Header />

        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...trasition, type: "tween" }}
          ></motion.div>
          <span>The best fitness club in the towns</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1000} start={900} delay="4" preFix="+" />
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={30} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero-right">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={trasition}
          className="heart-rate"
        >
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img className="hero-img" src={hero_img} alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={trasition}
          className="hero-img-back"
          src={hero_img_back}
          alt=""
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={trasition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
