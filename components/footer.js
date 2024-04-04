import styles from '../styles/Footer.module.css'
export default function Footer() {
    return (
        <div className={styles.container}>
            <img src='https://storage.cloud.google.com/recourse-assets/logos/recourse-white-no-fill.png' className={styles.logo} alt='footer-logo' />
            ReCourse Golf
        </div>
    );
}