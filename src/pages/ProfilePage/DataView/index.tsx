import { SubmitHandler, useForm } from 'react-hook-form'
//Стили
import styles from './DataView.module.scss'
//Хуки
//Типы
import { IProfileValues } from './Profile.types'
//Компоненты
import { Button, Input } from '@/components/UI'
import LayoutProfile from '@/layouts/LayoutProfile'
import { useOutletContext } from 'react-router'
import { useGetUserDataQuery, useUpdateUserDataMutation } from '@/redux/api/userAPI/user.api'
import { Spinner } from '@/components'

const DataView = () => {
    const _id: string = useOutletContext()
    const { data: userData, isLoading } = useGetUserDataQuery(_id)
    const [updateUserData, { isLoading: isLoadingUpdate }] = useUpdateUserDataMutation()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IProfileValues>({
        mode: 'onBlur',
        defaultValues: {
            nickName: userData?.nickName || '',
            firstName: userData?.firstName || '',
            email: userData?.email || '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<IProfileValues> = (data): void => {
        try {
            if (data.password !== '') {
                updateUserData({ _id, data })
            } else {
                updateUserData({ _id, data: { ...data, password: null } })
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <LayoutProfile label={'Личные данные'} link={'/profile/data'} _id={_id}>
            {isLoading || isLoadingUpdate ? (
                <Spinner />
            ) : (
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
                                message: 'Минимальная длина пароля 6 символов',
                            }}
                        />
                        <Button>Сохранить</Button>
                    </form>
                </div>
            )}
        </LayoutProfile>
    )
}

export default DataView
