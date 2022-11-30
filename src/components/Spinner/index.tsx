//Стили
import styles from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={styles.spinnerWrapper}>
            <div className={styles.spinner} />
        </div>
    )
}

export default Spinner
