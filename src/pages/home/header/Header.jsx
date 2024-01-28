import HeaderSearch from "./HeaderSearch.jsx";
import PrimaryBtn from "../../../UI/PrimaryBtn.jsx";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header id={styles.header}>
            <div className={`${styles.container} container`}>
                <div className={styles['banner-wrapper']}>
                    <h1 className={styles['banner-title']}>A lifetime of discounts? It's Genius.</h1>
                    <p className={styles['banner-desc']}>Get rewarded for your travels - unlock instant savings of 10% or more with a free account</p>
                    <PrimaryBtn>
                        <a href="#">Sign in / Register</a>
                    </PrimaryBtn>
                </div>
                <HeaderSearch />
            </div>
        </header>
    )
}

export default Header;