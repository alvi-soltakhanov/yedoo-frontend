// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {fetchfood} from "../../redux/features/food"
// import SearchForm from './searchCart/SearchForm';

// const SearchPage = () => {
//     const cards = useSelector((state) => state.services.services);

//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       dispatch(fetchfood())
//     }, [dispatch]);
  
//     const textFromMainInput = window.location.href.split("?");
//     const textHref = decodeURI(textFromMainInput[textFromMainInput.length - 1]);
  
//     const textToFind = () => {
//       if (textHref === textFromMainInput[0]) {
//         return clearAdress;
//       }
//       return textHref;
//     };
  
//     const [clearAdress, setClearAdress] = useState("");
//     const [inputText, setInputText] = useState(textToFind());
  
//     const executors = useSelector(state => state.services.executors)
  
//     const filteredCarts = cards.filter((card) => {
//       if (
//         (card.serviceName.toLowerCase().includes(inputText.toLowerCase()) ||
//           !inputText) &&
//         (card.categoryId === categoryId || !categoryId)
//       ) {
//         return true;
//       }
//       return false;
//     })

//     return(
        
//     )
// };

// export default SearchPage;