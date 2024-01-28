import { useState } from 'react';
import { Link } from 'react-router-dom';
import RangeEl from './DateRangeEl';

import styles from "./HeaderSearch.module.css"
import PrimaryBtn from '../../../UI/PrimaryBtn';

const HeaderSearch = () => {
    // đặt state lưu trạng thái ẩn dateRange mặc định bằng true
    const [isHidden, setIsHidden] = useState(true);

    // function thay đổi bật tắt cửa sổ dateRange
    const changeIsHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <div className={styles['search-wrapper']}>
            <div className={styles['enter-location']}>
                <i className={`fa-solid fa fa-bed ${styles['header-icon']}`}></i>
                <span className={styles['header-input']}>Where are you doing?</span>
            </div>
            <div className={styles['enter-timer']}>
                <div onClick={changeIsHidden}>
                    <i className={`fa-solid fa fa-calendar ${styles['header-icon']}`}></i>
                    <span className={styles['header-input']}>11/28/2023 to 11/31/2023</span>
                </div>
                <RangeEl isHidden={isHidden} changeIsHidden={changeIsHidden} />
            </div>
            <div className={styles['enter-people']}>
                <i className={`fa-solid fa fa-female ${styles['header-icon']}`}></i>
                <span className={styles['header-input']}>1 adult - 0 children - 1 room</span>
            </div>
            <PrimaryBtn>
                <Link to="/search" >Search</Link>
            </PrimaryBtn>
        </div>
    )
}

export default HeaderSearch;