import React from "react";

import styles from "./CarsList.module.css";
import CarCard from "../CarCard/CarCard";

const CarsList = ({ cars }) => {

  return (
    <ul className={styles.carsList}>
      {cars.map((car) => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
