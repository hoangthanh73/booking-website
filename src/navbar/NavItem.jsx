import styles from "./NavItem.module.css";

const NavItem = (props) => {
    // khi click vào từng item thì gọi hàm changeActive để thay đổi giá trị active các item
    const handlerClick = () => {
        props.changeActive(props.id);
    }

    return (
        <li className={`${styles['navbar-bot__item']} ${props.item.active && styles.active}`} onClick={handlerClick} >
            <a className={styles['navbar-bot__link']}>
                <i className={`fa-solid ${props.item.icon} ${styles['navbar-bot__icon']}`}></i>
                <span>{props.item.type}</span>
            </a>
        </li >
    );
};

export default NavItem;
