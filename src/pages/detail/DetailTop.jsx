import { Link } from "react-router-dom";
import styles from "./DetailTop.module.css";
import RadiusBtn from "../../UI/RadiusBtn.jsx";

const DetailTop = (props) => {

    return (
        <div className={styles['detail-top']}>
            <div className={styles['detail-top__content']}>
                <h2 className={styles['detail-top__name']}>{props.item.name}</h2>
                <p className={styles['detail-top__address']}>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{props.item.address}</span>
                </p>
                <p className={styles['detail-top__distance']}>{props.item.distance}</p>
                <p className={styles['detail-top__price']}>{props.item.price}</p>
            </div>
            <RadiusBtn>
                <Link to="/">Reserve or Book Now!</Link>
            </RadiusBtn>
        </div>
    )

};

export default DetailTop;