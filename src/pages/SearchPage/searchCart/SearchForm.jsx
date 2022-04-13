import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCafeById } from '../../../redux/features/cafe';
import styles from "./cardCafe.module.css"

const SearchForm = ({cafe, food}) => {

    const dispatch = useDispatch()

    const hundleCafe = (id) => {
        dispatch(fetchCafeById(id))
    }

    return (
        
        <Link to={`/cafe/${cafe._id}`} onClick={() => hundleCafe(cafe._id)}><div className={styles.cafe_card}>
            <div className={styles.image}>
                <img src={cafe.image} alt="" />
            </div>
            <div className={styles.name}>
               <h4>{cafe.name}</h4>
               <h5>{cafe.description}</h5>
            </div>
        </div></Link>
    );
};

export default SearchForm;