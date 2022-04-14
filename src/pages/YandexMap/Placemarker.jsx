import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
import { Map, Placemark } from "react-yandex-maps";
// import { fetchCafe } from "../../redux/features/cafe";
// import styles from "./YMap.module.css";

// const key = "2a670aaa-e106-4bf0-88e0-cb885604beab";

const Placemarker = ({ coord, id, name }) => {
  // const orders = useSelector(state=>state.

  const foo = () => {
    return "нет ничего невозможного, Сайд-Мохьмад";
  };
  return (
    <Placemark
      id={id}
      geometry={{
        type: "Point",
        coordinates: coord.coordinates //координаты по адресу кафе
      }}
      modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
      properties={{
        // iconContent: "3", //количество заказов
        hintContent: name,
        balloonContent: `${foo()}`
      }}
    />
  );
};

export default Placemarker;
