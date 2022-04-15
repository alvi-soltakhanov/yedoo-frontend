import React from "react";
import { useSelector } from "react-redux";
import { Placemark } from "react-yandex-maps";

const Placemarker = ({ coord, id, name }) => {
  const orders = useSelector((state) => state.order.orders);
  const ordersAtCafe = orders?.filter(
    (order) => order.cafeId === id && order.status === "atCafe"
  );
  const ordersCount = ordersAtCafe.length;

  let result;
  if (ordersAtCafe.length) {
    result = ordersAtCafe?.reduce((acc, order) => {
      return (
        acc +
        `<span>Номер заказа: #${order._id.slice(16)}</span><button id="${
          order?._id
        }" >Принять заказ</button><br>`
      );
    }, ``);
  }

  return (
    <Placemark
      id={id}
      geometry={{
        type: "Point",
        coordinates: coord.coordinates 
      }}
      modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
      properties={{
        iconContent: `${ordersCount}`, 
        hintContent: name,
        balloonContent: result
      }}
    />
  );
};

export default Placemarker;
