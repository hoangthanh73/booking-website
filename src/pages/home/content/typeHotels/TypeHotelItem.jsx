import styles from "./TypeHotelItem.module.css";

const TypeHotelItem = (props) => {
    return (
        <li className={styles['type-hotel__item']}>
            <img className={styles['type-hotel__image']} src={props.item.image} alt={props.item.name} />
            <div className={styles['type-hotel__content']}>
                <h3 className={styles['sub-title']}>{props.item.name}</h3>
                <p className={styles['sub-text']}>{props.item.count} hotels</p>
            </div>
        </li>
    )
};

export default TypeHotelItem;