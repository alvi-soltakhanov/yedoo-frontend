import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import Header from "../../components/Header/Header";
import { fetchCafeByToken } from "../../redux/features/cafe";
import { fetchClientByToken } from "../../redux/features/client";
import { fetchCourierByToken } from "../../redux/features/courier";
import styles from "./ProfilePage.module.css";
import Sidebar from "./Sidebar";
import Messanger from '../Messenger/Messenger'

const ProfilePage = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCafeByToken());
        dispatch(fetchClientByToken());
        dispatch(fetchCourierByToken());
    }, [dispatch]);

    const role = useSelector(state => state.application.role);
    const cafe = useSelector((state) => state.cafe.cafeById);
    const client = useSelector((state) => state.client.client);
    const courier = useSelector((state) => state.courier.courier);
   
    // const obj = useOutletContext();
    // console.log( useOutletContext());
    // console.log(!!obj.allowedRoles.includes(obj.role));
    return (
        <div className={styles.profilePage}>
            <Header />
            <div className={styles.profileContent}>
                {/* {role==='cafe' && <CafeMenu />} */}
                <Outlet />
                <Sidebar role={role} candidates={[cafe, client, courier]} />
            </div>
        </div>
    );
};

export default ProfilePage;
