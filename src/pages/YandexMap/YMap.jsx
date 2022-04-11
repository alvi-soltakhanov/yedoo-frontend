import {
  Map,
  Placemark,
  RoutePanel,
  SearchControl,
  YMaps
} from "react-yandex-maps";
import React from "react";

const key = "2a670aaa-e106-4bf0-88e0-cb885604beab";
const YMap = () => {
  return (
    <>
      <YMaps query={{ apikey: key }}>
        <Map
          defaultState={{
            center: [43.31740855269473, 45.69239139938533],
            zoom: 13
          }}
        >
          <Placemark geometry={[43.32035397704716, 45.682864192964416]} />
          <Placemark geometry={[43.32320526150809, 45.69475174331842]} />

          <Placemark
            geometry={[43.335353977, 45.68286419]}
            properties={{
              hintContent: "Собственный значок метки",
              balloonContent: "Заказ №1"
            }}
            options={{
              iconLayout: "default#image",
              iconImageHref: "images/myIcon.gif",
              iconImageSize: [30, 42],
              iconImageOffset: [-3, -42]
            }}
          />

          <SearchControl options={{ provider: "yandex#map" }} />
          {false && (
            <RoutePanel
              state={{
                fromEnabled: false,
                // Адрес или координаты пункта отправления.
                from: "Москва, Льва Толстого 16"
              }}
              options={{ float: "right" }}
            />
          )}
        </Map>
      </YMaps>
    </>
  );
};

export default YMap;
