import React, { useEffect, useState } from "react";
import Slider from "react-touch-drag-slider";

import styles from "./Home.module.css";
import cars from "./cars";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textBlockVisible, setTextBlockVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex === cars.length - 1) {
          clearInterval(interval);
          return prevIndex;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);

    setTimeout(() => {
      setTextBlockVisible(true);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className={styles.home}>
      <div className={styles.sliderContainer}>
        <Slider
          activeIndex={activeIndex}
          threshHold={100}
          transition={1}
          scaleOnDrag={true}
        >
          {cars.map(({ url, title }, index) => (
            <img className={styles.img} src={url} key={index} alt={title} />
          ))}
        </Slider>
        <div
          className={`${styles.textBlock} ${
            textBlockVisible ? styles.visible : ""
          }`}
        >
          <div>RENT EXCLUSIVE CAR</div>
          <div className={styles.secondText}>
            <span>To get started go to </span>
            <span className={styles.link}>
              <NavLink to="/catalog">Catalog Page</NavLink>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/28/16/03/range-rover-2015643_1280.jpg"
          alt="Car"
        />
        <div className={styles.textContainer}>
          <p className={styles.mainText}>WELCOME</p>
          <p className={styles.text}>RENT THE CAR</p>
          <p className={styles.text}>OF YOUR DREAMS</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
