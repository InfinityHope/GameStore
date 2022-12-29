import { FC } from 'react'
import styles from './RequirementsList.module.scss'
import { IRequirements } from '../../../models/product.models'

const RequirementList: FC<{ requirements: IRequirements }> = ({ requirements }) => {
    return (
        <>
            <ul className={styles.RequirementsList}>
                <li>
                    <p>ОС</p>
                    <span>{requirements.os}</span>
                </li>
                <li>
                    <p>Процессор</p>
                    <span>{requirements.processor}</span>
                </li>
                <li>
                    <p>Оперативная память</p>
                    <span>{requirements.ram} ГБ ОЗУ</span>
                </li>
                {requirements.network && (
                    <li>
                        <p>Подключение к интернету</p>
                        <span>{requirements.network}</span>
                    </li>
                )}
                <li>
                    <p>Видеокарта</p>
                    <span>{requirements.videoCard}</span>
                </li>
                <li>
                    <p>DirectX</p>
                    <span>{requirements.directX}</span>
                </li>
                <li>
                    <p>Место на диске</p>
                    <span>{requirements.diskStorage} ГБ</span>
                </li>
                {requirements.soundCard && (
                    <li>
                        <p>Звуковая карта</p>
                        <span>{requirements.soundCard} ГБ</span>
                    </li>
                )}
            </ul>
        </>
    )
}

export default RequirementList
