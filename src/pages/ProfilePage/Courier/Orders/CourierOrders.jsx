import styles from "./CourierOrders.module.css";
import noFood from "../../../../assets/Profile/noFood.png";
import stick from "../../../../assets/heigthLine.png";
import OrderItemCourier from "./OrderItemCourier";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOneOrder, fetchOrders } from "../../../../redux/features/order";
import { fetchCafe } from "../../../../redux/features/cafe";
import YMap from "./Maps/YMap";
import RouteMap from "./Maps/RouteMap";

const CourierOrders = () => {
  const dispatch = useDispatch();
  
  const orders = useSelector((state) => state.order.orders);
  const cafe = useSelector((state) => state.cafe.cafe);
  const oneOrder = useSelector((state) => state.order.oneOrder);
  const [selected, setSelected] = useState("list");
  const [returnBack, setReturnBack] = useState(selected);
  const [showOne, setShowOne] = useState(false);
  const loading = useSelector( state => state.order.loading);
  const [open, setOpen] = useState(true);
  const handleOpen =() => setOpen(true)
  const handleClose =() => setOpen(false)
  
  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchCafe());
  }, [dispatch]);

  

  const selectView = () => {
    selected === "list" ? setSelected("map") : setSelected("list");
    setShowOne(false);
  };

  const showClick = (e) => {
    setReturnBack(selected);
    if (e.target.closest("button")) {
      dispatch(fetchOneOrder(e.target.id));
      setShowOne(true);
      setSelected("");
    }
    if (e.target.id === "close") {
      setShowOne(false);
      setSelected(returnBack);
    }
  };

  return (
    <div className={styles.ordersContainer}>
      {orders ? (
        <div className={styles.ordersMain}>
          <div className={styles.ordersHeader}>
            <div className={styles.titleHead}>
              <div className={styles.title}>
                {showOne ? (<div><img src={stick} alt="" />
                    Информация о заказе </div>) : (<div><img src={stick} alt="" />
                    Список заказов
                    <span>(доступно {orders?.length} заказа)</span>
                  </div>
                )}
              </div>
              <button onClick={() => selectView()}>
                {selected === "list" ? "Показать на карте" : "Показать список"}
              </button>
            </div>
          </div>
          {selected === "list" && (
          
            
            <div className={styles.ordersList} onClick={(e) => showClick(e)}>
             {loading ? <div className={styles.ldsHourglass}></div> : orders?.map(order => { if (order.status === "atCafe" || (order.courierId === localStorage.getItem("Id") && order.status !== "atClient" )) {
                            return <OrderItemCourier key={order._id} order={order} cafe={cafe} showOne={showOne} setShowOne={setShowOne}/>
                        }})}
             
            </div>
          )}
          {selected === "map" && (
            <div className={styles.ordersList} onClick={(e) => showClick(e)}>
              <YMap showOne={showOne} setShowOne={setShowOne} />
            </div>
          )}
          {showOne && (
            <div className={styles.oneOrder}>
              <OrderItemCourier
                key={oneOrder._id}
                order={oneOrder}
                cafe={cafe}
                showOne={showOne}
                setShowOne={setShowOne}
                showClick={showClick}
              />
              <RouteMap order={oneOrder} />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.noOrdersContainer}></div>
          <div className={styles.noOrder}>
            Нет доступных заказов <img src={noFood} alt="no-food" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CourierOrders;
