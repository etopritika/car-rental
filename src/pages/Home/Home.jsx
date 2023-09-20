import React, { useEffect, useState } from "react";
import Slider from "react-touch-drag-slider";

import styles from "./Home.module.css";
import cars from "./cars";

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
      <div className={styles.imgContainer}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/28/16/03/range-rover-2015643_1280.jpg"
          alt="Car"
        />
        <div
          className={`${styles.textBlock} ${
            textBlockVisible ? styles.visible : ""
          }`}
        >
          <span>Choose your premium class car</span>
        </div>
      </div>
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
      </div>
    </main>
  );
};

export default Home;
