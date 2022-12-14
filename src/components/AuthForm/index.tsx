//Библиотеки
import { FC, useContext, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
//Стили
import styles from './AuthForm.module.scss'
//Типы
import { IFormValues } from './AuthForm.types'
//Хуки
//Асинхронные функции
//Контекст
import { SidebarContext } from '../../context/SidebarContext/SidebarContext'
//Компоненты
import { Button, Input } from '../UI'
import { useLoginUserMutation, useRegisterUserMutation } from '../../redux/api/authAPI/auth.api'

const AuthForm: FC<{ type: 'Login' | 'Register' }> = ({ type }) => {
    const { showSidebar, activeSidebar } = useContext(SidebarContext)
    const [loginUser, { isError: isErrorLogin, isLoading: isLoadingLogin }] = useLoginUserMutation()
    const [registerUser, { isError: isErrorRegister, isLoading: isLoadingRegister }] =
        useRegisterUserMutation()
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        clearErrors,
        reset,
    } = useForm<IFormValues>({
        mode: 'onBlur',
        defaultValues: {
            email: 'bigbasspoll@gmail.com',
            password: 'Xen050501',
        },
    })

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        const { email, password, firstName, nickName } = data
        try {
            if (type === 'Register') {
                const data = await registerUser({
                    email,
                    password,
                    firstName,
                    nickName,
                }).unwrap()
                console.log(data)
                localStorage.setItem('auth', JSON.stringify(data))
            } else {
                const data = await loginUser({ email, password }).unwrap()
                console.log(data)
                localStorage.setItem('auth', JSON.stringify(data))
            }
        } catch (e) {
            console.log(e)
        } finally {
            if (showSidebar) {
                showSidebar()
            }
        }
    }

    useEffect(() => {
        reset()
        if (!activeSidebar) {
            clearErrors()
        }
    }, [type, activeSidebar])

    return (
        <form className={styles.AuthForm} onSubmit={handleSubmit(onSubmit)}>
            {type === 'Register' ? (
                <>
                    <Input
                        type={'text'}
                        labelText={'Имя'}
                        id={'name'}
                        autocomplete={'off'}
                        register={register}
                        required={true}
                        label={'firstName'}
                        message={'Пожалуйста, заполните поле ввода'}
                        error={errors.firstName}
                    />
                    <Input
                        type={'text'}
                        labelText={'Никнейм'}
                        id={'nickName'}
                        register={register}
                        required={true}
                        label={'nickName'}
                        message={'Пожалуйста, заполните поле ввода'}
                        error={errors.nickName}
                    />
                </>
            ) : null}
            <Input
                type={'email'}
                labelText={'E-mail'}
                id={'email'}
                autocomplete={'off'}
                register={register}
                required={true}
                label={'email'}
                message={'Пожалуйста, заполните поле ввода'}
                error={errors.email}
                pattern={{
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Пожалуйста, введите корректный E-mail',
                }}
            />
            <Input
                type={'password'}
                labelText={'Пароль'}
                id={'password'}
                register={register}
                required={true}
                label={'password'}
                message={'Пожалуйста, заполните поле ввода'}
                error={errors.password}
            />
            <Button disabled={!isValid}>
                {type === 'Register' ? 'Зарегестрироваться' : 'Войти'}
            </Button>
        </form>
    )
}

export default AuthForm
