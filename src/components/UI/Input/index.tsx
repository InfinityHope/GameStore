//Библиотеки
import { FC, useState } from 'react'
//Стили
import styles from './Input.module.scss'
//Типы
import { FieldError, Path, UseFormRegister } from 'react-hook-form'
import { IFormValues } from '../../AuthForm/AuthForm.types'
import { IProfileValues } from '../../../pages/ProfilePage/DataView/Profile.types'
import { AiFillEye, AiTwotoneEyeInvisible } from 'react-icons/all'

//Компоненты

interface IProps {
    type: string
    id?: string
    labelText: string
    autocomplete?: 'off' | 'on'
    register: UseFormRegister<IFormValues> | UseFormRegister<IProfileValues>
    required: boolean
    label: Path<IFormValues> | Path<IProfileValues>
    error?: FieldError | undefined
    message?: string
    pattern?: {
        value: RegExp
        message: string
    }
    minLength?: {
        value: number
        message: string
    }
}

const Input: FC<IProps> = (props) => {
    const [passType, setPassType] = useState('password')

    const changeType = () => {
        if (passType === 'password') {
            setPassType('text')
        } else {
            setPassType('password')
        }
    }

    return (
        <div className={styles.WrapperInput}>
            <div className={styles.Input}>
                <input
                    placeholder={' '}
                    type={props.type === 'password' ? passType : props.type}
                    id={props.id}
                    autoComplete={props.autocomplete}
                    {...props.register(props.label, {
                        required: props.message,
                        pattern: {
                            value: props.pattern?.value!,
                            message: props.pattern?.message!,
                        },
                        minLength: {
                            value: props.minLength?.value!,
                            message: props.minLength?.message!,
                        },
                    })}
                />
                <label htmlFor={props.id}>{props.labelText}</label>
            </div>
            {props.type === 'password' ? (
                passType === 'password' ? (
                    <AiFillEye size={30} cursor={'pointer'} color={'white'} onClick={changeType} />
                ) : (
                    <AiTwotoneEyeInvisible
                        size={30}
                        cursor={'pointer'}
                        color={'white'}
                        onClick={changeType}
                    />
                )
            ) : (
                ''
            )}
            {props.error?.message && (
                <div className={'flex text-red-500'}>
                    {props.error?.message || props.pattern?.message}
                </div>
            )}
        </div>
    )
}

export default Input
