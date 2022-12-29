import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/img/logo.png'

const Footer = () => {
    return (
        <div className={'w-full h-[200px] bg-[#121212]/70 mt-24 flex items-center justify-between'}>
            <div className="container">
                <div className={'flex justify-center items-center'}>
                    <NavLink to={'/'}>
                        <img width={150} src={logo} alt="logo" />
                    </NavLink>
                    <div className={'flex flex-col ml-12'}>
                        <h3 className={'text-white text-xl'}>Данный проект является тестовым</h3>
                        <p className={'text-white text-xl'}>
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
