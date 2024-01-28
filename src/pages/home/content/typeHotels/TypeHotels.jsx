import TypeHotelItem from "./TypeHotelItem.jsx";

import styles from "./TypeHotels.module.css";

const TypeHotels = () => {
    const type = require("./type.json");
    return (
        <section className={styles['type-hotel']}>
            <h2 className={styles['type-hotel__header']}>Browse by property type</h2>
            <ul className={styles['type-hotel__wrapper']}>

                {/* render TypeHotelItems dựa vào type_data */}
                {type.map((el, index) => {
                    return (
                        <TypeHotelItem key={index} item={el} />
                    )
                })}
            </ul>
        </section>
    )
}

export default TypeHotels;