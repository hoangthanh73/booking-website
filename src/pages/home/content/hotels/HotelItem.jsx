import Rate from "../../../../UI/Rate.jsx";

import styles from "./HotelItem.module.css";

const HotelItem = (props) => {
    return (
        <li className={styles['hotel-item']}>
            <img className={styles['hotel-image']} src={props.data.image_url} alt={props.data.name} />
            <div className={styles['hotel-content']}>
                <h3 className={styles['hotel-title']}>{props.data.name}</h3>
                <p className={styles['hotel-city']}>{props.data.city}</p>
                <p className={styles['hotel-price']}>Starting from ${props.data.price}</p>
                <p>
                    <Rate>{props.data.rate}</Rate>
                    <span className={styles['hotel-type']}>{props.data.type}</span>
                </p>
            </div>
        </li>
    )
}

export default HotelItem;