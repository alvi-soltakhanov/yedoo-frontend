import React, { useEffect, useState } from "react";
import style from "./cafe.module.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { fetchCafe, fetchCafeById } from "../../redux/features/cafe";
import Card from "../../components/Card/Card";
import error from "../../assets/sorry.webp";
import { fetchFood } from "../../redux/features/food";
import { fetchCategories } from "../../redux/features/categories";
import { Link, useParams } from "react-router-dom";
import burga from "../../assets/burg.webp"

const CafePage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [getCategory, setGetCategory] = useState(false);

  const hundleInp = (e) => {
    setInput(e.target.value);
  };

  const handleCategoryId = (id) => {
    if (categoryId === id) {
      setGetCategory(false);
      setCategoryId("");
    } else {
      setGetCategory(true);
      setCategoryId(id);
    }
  };

  useEffect(() => {
    dispatch(fetchCafe());
    dispatch(fetchFood());
    dispatch(fetchCategories());
  }, [dispatch]);

  const cafe = useSelector((state) => state.cafe.cafe);
  const food = useSelector((state) => state.food.food);
  const categories = useSelector((state) => state.categories.categories);

  console.log(food);

  const cafe1 = cafe?.find((cafe) => cafe._id === params.id);

  const foodCafe = food?.filter((food) => {
    return cafe1?._id === food?.cafeId;
  });

  const filterfood = foodCafe?.filter((food) => {
    return (
      (food?.name?.toLowerCase().includes(input.toLowerCase()) || !input) &&
      (food?.categoryId === categoryId || !categoryId)
    );
  });

  const hundleImg = () => {
    setInput("")
  }
  //   console.log(food?.categoryId);

  return (
    <>
      <Header />
      <div className={style.rest}>
        <div className={style.cafe}>
          <Link to={`/search`}>
            {" "}
            <p className={style.caves}> ❮ Рестораны</p>
          </Link>
          <div className={style.name}>{cafe1?.name}</div>
          <div className={style.name_discript}>{cafe1?.description}</div>
          <div className={style.categories}>
            {categories?.map((categories) => {
              return (
                <p
                  key={categories._id}
                  onClick={() => handleCategoryId(categories?._id)}
                  className={
                    categories?._id === categoryId
                      ? style.true_effect
                      : ""
                  }
                >
                  {categories.name}
                </p>
              );
            })}
          </div>
          <div className={style.input}>
            <input
              type="text"
              placeholder="Введите название еды.."
              onChange={(e) => hundleInp(e)}
              value={input}
            />
            <img src={burga} onClick={() => hundleImg()} className={style.burger} alt="" />
          </div>
          <div className={style.menu}>
            {filterfood?.map((food) => {
              return (
                <Card
                  price={food?.price}
                  name={food?.name}
                  id={food?._id}
                  image={food?.image}
                  img={food?.image}
                  info={food?.info}
                  key={food._id}
                />
              );
            })}
            {foodCafe && !filterfood?.length && (
              <div className={style.error}>
                Ничего не найдено..
                <div className={style.img_error}>
                  <img src={error} alt="" />
                </div>{" "}
              </div>
            )}
          </div>
          <div className={style.description}>
            <p>Информация</p>
            <div className={style.info_description}>
              <div className={style.rest_name}>
                О ресторане:
                <p>{cafe1?.name}</p>
                <div className={style.form}>
                  <div className={style.name_form}>
                    <div>
                      Специализация:
                      <p> Фастфуд, Завтраки, Бургеры</p>
                    </div>
                    <div>
                      Способы оплаты:
                      <p>Картой онлайн</p>
                    </div>
                  </div>
                  <div className={style.time}>
                    <div>
                      Рабочие дни:
                      <p>Пн, вт, ср, чт, пт, сб, вс</p>
                    </div>
                    <div>
                      Время приема заказов:
                      <p>С 09:00 до 23:00</p>
                    </div>
                  </div>
                  <div className={style.descript}>
                    <p>
                      По вопросам, возникшим в связи с предположительным
                      неправомерным использованием товарных знаков, логотипов и
                      иных материалов, просим обращаться по е-мейлу
                      <span className={style.ssilka}>
                        <span></span> copyright@YEDOO.search.com
                      </span>
                      . Просим к запросу прилагать подтверждающие документы.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CafePage;
