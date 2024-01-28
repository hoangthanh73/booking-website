import SearchItem from "./SearchItem.jsx";
import styles from './SearchList.module.css';

const SearchList = () => {
    const search = require("./search.json");

    return (
        <section id="search-list" className={styles['search-list']}>
            <ul className={styles['search-list__wrapper']}>

                {/* Render searchItem dựa vào data của seacrh.json */}
                {search.map((item, index) => {
                    return (
                        <SearchItem key={index} data={item} />
                    )
                })}
            </ul>
        </section>
    );
};

export default SearchList;