import styles from "./LightBtn.module.css";

const LightBtn = (props) => {
    return <div className={styles['btn']}>{props.children}</div>
}

export default LightBtn;