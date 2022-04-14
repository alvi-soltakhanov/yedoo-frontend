import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCafe } from "../../redux/features/cafe";
import YMap from "./YMap";

const Map = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchCafe()), [dispatch]);
  return (
    <div>
      <YMap />
    </div>
  );
};

export default Map;
