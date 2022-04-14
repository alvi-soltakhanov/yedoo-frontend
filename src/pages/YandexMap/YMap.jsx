import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FullscreenControl, Map, YMaps, ZoomControl } from "react-yandex-maps";
import { fetchOneOrder } from "../../redux/features/order";
import Placemarker from "./Placemarker";
import styles from "./YMap.module.css";

const key = "2a670aaa-e106-4bf0-88e0-cb885604beab";

const YMap = () => {
  const dispatch = useDispatch();

  const cafes = useSelector((state) => state.cafe.cafe);
  const oneOrder = useSelector((state) => state.order.oneOrder);

  const [coords, setCoords] = useState([]);
  const [showOne, setShowOne] = useState(false);

  const showClick = (e) => {
    console.log(e.target.id);
    if (e.target.closest("button")) {
      dispatch(fetchOneOrder(e.target.id));
      setShowOne(true);
    }
    if (e.target.id === "close") {
      setShowOne(false);
    }
  };

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
    <div className={styles.mapContainer} onClick={(e) => showClick(e)}>
      <YMaps query={{ apikey: key }}>
        <Map
          onLoad={(ymaps) => geocode(ymaps)}
          modules={["geocode"]}
          className={styles.map}
          defaultState={{
            center: [43.31777101437515, 45.693908688732876],
            zoom: 12
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
      {showOne && (
        <div className={styles.oneOrder}>
          <div>
            <button id="close">x</button>
          </div>
          <h3>Информация о заказе</h3>
          <div>
            <button>Подтвердить</button>
            <button id="close">Отклонить</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YMap;
