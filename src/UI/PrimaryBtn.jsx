import styles from "./PrimaryBtn.module.css";

const PrimaryBtn = (props) => {
    return <div className={`${styles.btn}`}>{props.children}</div>
}

export default PrimaryBtn;