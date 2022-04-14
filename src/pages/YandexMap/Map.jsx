import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCafe } from "../../redux/features/cafe";
import { fetchOrders } from "../../redux/features/order";
import RouteMap from "./RouteMap";
import YMap from "./YMap";

const Map = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchCafe()), [dispatch]);
  useEffect(() => dispatch(fetchOrders()), [dispatch]);
  return (
    <div>
      {/* <YMap /> */}
      <RouteMap />
    </div>
  );
};

export default Map;
