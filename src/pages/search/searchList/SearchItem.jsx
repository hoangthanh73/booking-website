import { Link } from "react-router-dom";

import Rate from "../../../UI/Rate.jsx";
import RadiusBtn from "../../../UI/RadiusBtn.jsx";

import styles from "./SearchItem.module.css";

const SearchItem = (props) => {
    return (
        <li className={styles['search-list__item']}>
            <img src={props.data.image_url} alt={props.data.name} className={styles['search-list__image']} />
            <div className={styles['search-list__info']}>
                <h3 className={styles['search-list__title']}>{props.data.name}</h3>
                <p className={styles['search-list__distance']}>{props.data.distance} from center</p>
                <p className={styles['search-list__tag']}>{props.data.tag}</p>
                <p className={styles['search-list__description']}>{props.data.description}</p>
                <p>{props.data.type}</p>
                {props.data.free_cancel &&
                    <div className={styles['text-success']}>
                        <p><strong>Free cancellation</strong></p>
                        <p><span>You can cancel later, so lock in this great price today!</span></p>
                    </div>}
            </div>
            <div className={styles['search-list__more']}>
                <p className={styles['search-list__rate']}>
                    <span className={styles['rate-text']}>{props.data.rate_text}</span>
                    <Rate>{props.data.rate}</Rate>
                </p>
                <div className={styles['search-list__price']}>
                    <p className={styles['price']}>${props.data.price}</p>
                    <p className={styles['text-gray']}>Includes taxes and fees</p>
                </div>
                <RadiusBtn>
                    <Link to="/detail">See availability</Link>
                </RadiusBtn>
            </div>
        </li>
    );
};

export default SearchItem;