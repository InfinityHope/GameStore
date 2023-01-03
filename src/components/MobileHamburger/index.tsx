import styles from './MobileHambuger.module.scss'
import { GiHamburgerMenu } from 'react-icons/all'
import { FC } from 'react'

const MobileHamburger: FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className={styles.MobileHamburger} onClick={onClick}>
            <GiHamburgerMenu size={40} />
        </div>
    )
}

export default MobileHamburger
