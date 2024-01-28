import styles from "./CityItem.module.css";

const CityItem = (props) => {
    return (
        <li className={styles['city-item']}>
            <img src={props.item.image} alt={props.item.name} className={styles['city-image']} />
            <div className={styles['city-content']}>
                <h3 className={styles['city-title']}>{props.item.name}</h3>
                <p className={styles['city-properties']}>{props.item.subText}</p>
            </div>
        </li>
    )
};

export default CityItem;