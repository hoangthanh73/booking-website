import CityItem from "./CityItem.jsx";
import styles from "./Cities.module.css";

const Cities = () => {
    const cities = require("./city.json");

    return (
        <section className={styles.city}>
            <ul className={styles['city-wrapper']}>
                
                {/* render từng item dựa vào cities_data */}
                {cities.map((el, index) => {
                    return (
                        <CityItem key={index} item={el} />
                    )
                })}
            </ul>
        </section>
    )

};

export default Cities;