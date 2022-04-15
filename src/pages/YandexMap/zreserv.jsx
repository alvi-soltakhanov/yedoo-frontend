import React from "react";
import { useSelector } from "react-redux";
import {
  Map,
  // Placemark,
  RoutePanel,
  SearchControl,
  YMaps
} from "react-yandex-maps";
// import { fetchCafe } from "../../redux/features/cafe";
import styles from "./YMap.module.css";

const key = "2a670aaa-e106-4bf0-88e0-cb885604beab";

const YMap = () => {
  // const dispatch = useDispatch();

  const cafes = useSelector((state) => state.cafe.cafe);
  const loading = useSelector((state) => state.cafe.loading);
  console.log(loading);

  console.log(cafes);

  const showClick = (e) => {
    console.log(e.target.id);
  };
  return (
    <div className={styles.mapContainer} onClick={(e) => showClick(e)}>
      <YMaps query={{ apikey: key }} onLoad={(ymaps) => console.log(ymaps)}>
        <Map
          className={styles.map}
          defaultState={{
            center: [43.31777101437515, 45.693908688732876],
            zoom: 13
          }}
        >
          {0 && <RoutePanel options={{ float: "right" }} />}
          <SearchControl options={{ provider: "yandex#map" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default YMap;
