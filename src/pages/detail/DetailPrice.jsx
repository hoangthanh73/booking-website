import { Link } from "react-router-dom";
import styles from "./DetailPrice.module.css";
import RadiusBtn from "../../UI/RadiusBtn.jsx";

const DetailPrice = (props) => {
    return (
        <div className={styles['detail-price']}>
            <h3 className={styles['detail-price__title']}>Perfect for a 9-night stay!</h3>
            <p className={styles['detail-price__desc']}>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
            <p className={styles['detail-price__price']}>
                <strong>${props.nineNightPrice}</strong>
                <span> (9 night)</span>
            </p>
            <RadiusBtn>
                <Link to="/">Reserve or Book Now!</Link>
            </RadiusBtn>
        </div>
    )
};

export default DetailPrice;