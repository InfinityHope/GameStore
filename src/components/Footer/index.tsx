import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.png'

const Footer = () => {
    return (
        <div className={'w-full h-[200px] bg-[#121212]/70 mt-24 absolute bottom-0 left-0'}>
            <div className="container">
                <NavLink to={'/'}>
                    <img width={150} src={logo} alt="logo" />
                </NavLink>
            </div>
        </div>
    )
}

export default Footer
