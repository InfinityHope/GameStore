import styles from './MobileHambuger.module.scss'
import { GiHamburgerMenu } from 'react-icons/all'

const MobileHamburger = () => {
    return (
        <div className={styles.MobileHamburger}>
            <GiHamburgerMenu size={40} />
        </div>
    )
}

export default MobileHamburger
