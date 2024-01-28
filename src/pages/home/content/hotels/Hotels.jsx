import HotelItem from "./HotelItem.jsx";
import styles from "./Hotels.module.css";

const Hotels = () => {
    const hotelList = require("./hotel_list.json");

    return (
        <section className={styles.hotel}>
            <h2 className={styles['hotel-header']}>Homes guests love</h2>
            <ul className={styles['hotel-wrapper']}>

                {/* Render hotelItem dựa vào hotelList Data */}
                {hotelList.map((el, index) => {
                    return (
                        <HotelItem key={index} data={el} />
                    )
                })}
            </ul>
        </section>

    )
}

export default Hotels;