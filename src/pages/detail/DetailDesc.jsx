import styles from "./Detaildesc.module.css";

const DetailDesc = (props) => {
    return (
        <div>
            <h3 className={styles['detail-title']}>{props.desc.title}</h3>
            <p>{props.desc.description}</p>
        </div>
    )
}

export default DetailDesc;