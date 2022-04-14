import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../../redux/features/food";
import { fetchCafe } from "../../redux/features/cafe";
import SearchForm from "./searchCart/SearchForm";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./searchPage.module.css"

const SearchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCafe());
    // dispatch(fetchFood());
    console.log("123");
  }, [dispatch]);
  // const food = useSelector((state) => state.food.food);
  const cafe = useSelector((state) => state.cafe.cafe);
  const food = useSelector((state) => state.food.food);
  console.log(food);

  const textFromMainInput = window.location.href.split("?");
  const textHref = decodeURI(textFromMainInput[textFromMainInput.length - 1]);

  const textToFind = () => {
    if (textHref === textFromMainInput[0]) {
      return clearAdress;
    }
    return textHref;
  };

  const [clearAdress, setClearAdress] = useState("");
  const [inputText, setInputText] = useState(textToFind());

  const filteredCafe = cafe?.filter((cafe) => {
    if (
      cafe.name.toLowerCase().includes(inputText.toLowerCase()) ||
      !inputText &&
      (food.cafeId === cafe._id || !cafe._id)
    ) {
      return true;
    }
    return false;
  });

  return (
    <>
      <Header inputText={inputText} setInputText={setInputText} />
      <div className={style.searchPage}>
        <div className={style.inp_name}>{inputText}</div>
          <div className={style.content}>
            {filteredCafe?.map((cafe) => {
              return <SearchForm cafe={cafe} key={cafe._id} food={food} />;
            })}
            {!filteredCafe?.length && <div className={style.error}>Ничего не найдено</div>}
          </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SearchPage;
