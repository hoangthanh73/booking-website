import styles from "./DetailPhotos.module.css";

const DetailPhotos = (props) => {
    return (
        <div className={styles['photo-list']}>
            {props.photos.map((el, index) => {
                return (
                    <div key={index} className={styles['photo-item']}>
                        <img src={el} alt={`detail image ${index}`} className={styles['photo-img']}/>
                    </div>
                )
            })}
        </div>
    )
};

export default DetailPhotos;