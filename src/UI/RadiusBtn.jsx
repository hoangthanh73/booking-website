import styles from "./RadiusBtn.module.css";

const RadiusBtn = (props) => {
    return <div className={`${styles.btn} ${styles.radius}`}>{props.children}</div>
}

export default RadiusBtn;