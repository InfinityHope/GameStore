import { SubmitHandler, useForm } from 'react-hook-form'
//Стили
import styles from './DataView.module.scss'
//Хуки
import {
    useAppDispatch,
    useAppSelector,
} from '../../redux/hooks/redux'
//Типы
import { IProfileValues } from './Profile.types'
//Асинхронные функции
import { updateUserData } from '../../redux/reducers/UserReducer/asyncActions'
//Компоненты
import { Button, Input } from '../../components/UI'
import LayoutProfile from '../../Layouts/LayoutProfile'
import { useOutletContext } from 'react-router'

const DataView = () => {
    const { userData } = useAppSelector((state) => state.user)
    const _id: string = useOutletContext()
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProfileValues>({
        mode: 'onBlur',
        defaultValues: {
            nickName: userData.nickName,
            firstName: userData.firstName,
            email: userData.email,
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IProfileValues> = (data): void => {
        if (data.password !== '') {
            dispatch(updateUserData({ _id, data }))
        } else {
            dispatch(
                updateUserData({
                    _id,
                    data: { ...data, password: null },
                })
            )
        }
    }

    return (
        <LayoutProfile
            label={'Личные данные'}
            link={'/profile/data'}
            _id={_id}
        >
            <div className={styles.DataView}>
                <h3>Личные данные</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        type={'email'}
                        labelText={'E-mail'}
                        id={'email'}
                        autocomplete={'off'}
                        register={register}
                        required={true}
                        label={'email'}
                        message={'Пожалуйста, заполните поле ввода'}
                        error={errors.email}
                    />
                    <Input
                        type={'text'}
                        labelText={'Никнейм'}
                        id={'nickName'}
                        autocomplete={'off'}
                        register={register}
                        required={true}
                        label={'nickName'}
                        message={'Пожалуйста, заполните поле ввода'}
                        error={errors.nickName}
                    />
                    <Input
                        type={'password'}
                        labelText={'Пароль'}
                        id={'password'}
                        autocomplete={'off'}
                        register={register}
                        required={false}
                        label={'password'}
                        error={errors.password}
                        minLength={{
                            value: 6,
                            message:
                                'Минимальная длина пароля 6 символов',
                        }}
                    />
                    <Button>Сохранить</Button>
                </form>
            </div>
        </LayoutProfile>
    )
}

export default DataView
