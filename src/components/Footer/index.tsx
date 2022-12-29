import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/img/logo.png'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className="container">
                <div className={styles.FooterContent}>
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <div className={styles.FooterContentDescription}>
                        <h3>Данный проект является тестовым</h3>
                        <p>
                            На данном сайте невозможно приобрести тот или иной продукт, все ключи
                            являются фейковыми
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
