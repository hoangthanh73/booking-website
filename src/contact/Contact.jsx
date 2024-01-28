import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section className={styles['subcribe-wrapper']}>
            <h2 className={styles['subcribe-header']}>Save time, save money!</h2>
            <p className={styles['subcribe-desc']}>Sign up and we'll send the best deals to you</p>
            <form className={styles['form-wrapper']}>
                <input className={styles.email} type="email" placeholder="Your Email" />
                <input className={styles.btn} type="submit" value="Subcribe" />
            </form>
        </section>
    )
}

export default Contact;