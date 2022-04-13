import {
  Map,
  Placemark,
  RoutePanel,
  SearchControl,
  YMaps
} from "react-yandex-maps";
import React from "react";
import styles from "./YMap.module.css";

const key = "2a670aaa-e106-4bf0-88e0-cb885604beab";

const id = 1;
const cl = (e) => {
  console.log(e.target.id);
};

const YMap = () => {
  return (
    <div className={styles.mapContainer} onClick={(e) => cl(e)}>
      <YMaps query={{ apikey: key }}>
        <Map
          className={styles.map}
          defaultState={{
            center: [43.31777101437515, 45.693908688732876],
            zoom: 13
          }}
        >
          {0 && <RoutePanel options={{ float: "right" }} />}

          {1 && (
            <Placemark
              geometry={{
                type: "Point",
                coordinates: [43.32035397704716, 45.682864192964416]
              }}
              properties={{
                iconContent: "3"
              }}
            />
          )}
          <Placemark
            geometry={[43.32320526150809, 45.69475174331842]}
            properties={{
              hintContent: "Собственный значок метки",
              balloonContentLayout: 77
            }}
          />
          <Placemark
            geometry={[43.335353977, 45.68286419]}
            properties={{
              balloonContent: `${id}<button id="ид заказа">выбрать заказ</button><br>${
                id + 1
              }<button id="ид заказа2">выбрать 2 заказ</button>`
            }}
            // options={{
            //   iconLayout: "default#image",
            //   iconImageHref: "images/myIcon.gif",
            //   iconImageSize: [30, 42],
            //   iconImageOffset: [-3, -42]
            // }}
          />

          <SearchControl options={{ provider: "yandex#map" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default YMap;
