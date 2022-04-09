import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CafeMenu from "../../components/CafeProfile/CafeMenu";
import Header from "../../components/Header/Header";
import { fetchCafeByToken } from "../../redux/features/cafe";
import { fetchClientByToken } from "../../redux/features/client";
import { fetchCourierByToken } from "../../redux/features/courier";
import styles from "./ProfilePage.module.css";
import Sidebar from "./Sidebar";

const ProfilePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCafeByToken());
        dispatch(fetchClientByToken());
        dispatch(fetchCourierByToken());
    }, [dispatch]);

    const role = useSelector((state) => state.application.role);
    let currentUser;
    const cafe = useSelector((state) => state.cafe.cafeById);
    const client = useSelector((state) => state.client.client);
    const courier = useSelector((state) => state.courier.courier);

    if (cafe) {
        currentUser = cafe;
    } else if (client) {
        currentUser = client
    } else if (courier) {
        currentUser = courier
    }

    console.log(role);
    return (
        <div className={styles.profilePage}>
            <Header />
            <div className={styles.profileContent}>
                {/* {role==='cafe' && <CafeMenu />} */}
                <Outlet />
                <Sidebar role={role} currentUser={currentUser} />
            </div>
        </div>
    );
};

export default ProfilePage;
