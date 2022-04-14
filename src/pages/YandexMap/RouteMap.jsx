import React, { useState, useRef } from "react";
import { YMaps, Map } from "react-yandex-maps";
import styles from "./RouteMap.module.css";

const key = "2a670aaa-e106-4bf0-88e0-cb885604beab";
const mapState = { center: [43.31777101437515, 45.693908688732876], zoom: 11 };

const RouteMap = () => {
  const [ymaps, setYmaps] = useState(null);
  const routes = useRef(null);

  const getRoute = (ref) => {
    if (ymaps) {
      const multiRoute = new ymaps.multiRouter.MultiRoute(
        {
          referencePoints: [
            "Грозный, Льва Яшина 1",
            "Грозный, Миллионщикова 67"
          ],
          params: {
            results: 2
          }
        },
        {
          boundsAutoApply: true,
          routeActiveStrokeWidth: 6,
          routeActiveStrokeColor: "#fa6600"
        }
      );

      routes.current = multiRoute;
      ref.geoObjects.add(multiRoute);
    }
  };

  return (
    <div className={styles.routeMapContainer}>
      <YMaps query={{ apikey: key }}>
        <Map
          className={styles.map}
          modules={["multiRouter.MultiRoute"]}
          onLoad={(ymaps) => setYmaps(ymaps)}
          state={mapState}
          instanceRef={(ref) => ref && getRoute(ref)}
        />
      </YMaps>
    </div>
  );
};

export default RouteMap;
