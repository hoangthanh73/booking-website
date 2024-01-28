import styles from './SearchPopup.module.css';

import PrimaryBtn from "../../../UI/PrimaryBtn.jsx";

const SearchPopup = () => {
    return (
        <div id="form-popup" className={styles['form-popup']}>
            <h2 className={styles['form-popup__header']}>Search</h2>
            <div className={styles['form-control']}>
                <p className={styles['form-control__title']}>Destination</p>
                <input type="text" placeholder="" className={styles['form-control__input']} />
            </div>
            <div className={styles['form-control']}>
                <p className={styles['form-control__title']}>Check-in Date</p>
                <input type="text" placeholder="06/24/2022 to 06/24/2022" className={styles['form-control__input']} />
            </div>
            <div className={styles['form-control']}>
                <p className={styles['form-control__title']}>options</p>
                <div className={styles['form-option']}>
                    <label className={styles['form-option__text']}>Min price per night</label>
                    <input type="number" placeholder="" className={styles['form-option__input']} />
                </div>
                <div className={styles['form-option']}>
                    <label className={styles['form-option__text']}>Max price per night</label>
                    <input type="number" placeholder="" className={styles['form-option__input']} />
                </div>
                <div className={styles['form-option']}>
                    <label className={styles['form-option__text']}>Adult</label>
                    <input type="number" placeholder="1" className={styles['form-option__input']} />
                </div>
                <div className={styles['form-option']}>
                    <label className={styles['form-option__text']}>Children</label>
                    <input type="number" placeholder="0" className={styles['form-option__input']} />
                </div>
                <div className={styles['form-option']}>
                    <label className={styles['form-option__text']}>Room</label>
                    <input type="number" placeholder="1" className={styles['form-option__input']} />
                </div>
            </div>
            <PrimaryBtn>
                <input type="submit" value="Search" />
            </PrimaryBtn>
        </div>
    )
}

export default SearchPopup;
