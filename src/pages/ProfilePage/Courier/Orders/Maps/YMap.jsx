import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FullscreenControl, Map, YMaps, ZoomControl } from "react-yandex-maps";
import Placemarker from "./Placemarker";
import styles from "./YMap.module.css";

const key = "2a670aaa-e106-4bf0-88e0-cb885604beab";

const YMap = ({ showOne, setShowOne }) => {
  const cafes = useSelector((state) => state.cafe.cafe);

  const [coords, setCoords] = useState([]);

  const geocode = (ymaps) => {
    cafes?.forEach((cafe) => {
      ymaps.geocode(`Грозный, ${cafe.address}`).then((result) =>
        setCoords((IBRA) => [
          ...IBRA,
          {
            coordinates: result.geoObjects.get(0).geometry.getCoordinates(),
            id: cafe._id,
            name: cafe.name
          }
        ])
      );
    });
  };

  return (
    <div className={styles.mapContainer}>
      <YMaps query={{ apikey: key }}>
        <Map
          onLoad={(ymaps) => geocode(ymaps)}
          modules={["geocode"]}
          className={styles.map}
          defaultState={{
            center: [43.31777101437515, 45.693908688732876],
            zoom: 15
          }}
        >
          <div>
            {coords?.map((coord) => {
              return (
                <Placemarker
                  coord={coord}
                  key={coord.coordinates}
                  id={coord.id}
                  name={coord.name}
                />
              );
            })}
          </div>
          <FullscreenControl />
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default YMap;
