//Библиотеки
import { FC } from 'react'
//Стили
import styles from './RequirementsView.module.scss'
//Типы
import { IProduct } from '../../redux/models/IProduct'

const RequirementsView: FC<{ product: IProduct }> = ({ product }) => {
    return (
        <div className={styles.Requirements}>
            {product.requirements && (
                <>
                    <h2>Минимальные системные требования</h2>
                    <ul>
                        <li>
                            <p>ОС</p>
                            <span>{product.requirements.minimal.os}</span>
                        </li>
                        <li>
                            <p>Процессор</p>
                            <span>
                                {product.requirements.minimal.processor}
                            </span>
                        </li>
                        <li>
                            <p>Оперативная память</p>
                            <span>
                                {product.requirements.minimal.ram} ГБ ОЗУ
                            </span>
                        </li>
                        {product.requirements.minimal.network && (
                            <li>
                                <p>Подключение к интернету</p>
                                <span>
                                    {product.requirements.minimal.network}
                                </span>
                            </li>
                        )}
                        <li>
                            <p>Видеокарта</p>
                            <span>
                                {product.requirements.minimal.videoCard}
                            </span>
                        </li>
                        <li>
                            <p>DirectX</p>
                            <span>{product.requirements.minimal.directX}</span>
                        </li>
                        <li>
                            <p>Место на диске</p>
                            <span>
                                {product.requirements.minimal.diskStorage} ГБ
                            </span>
                        </li>
                        {product.requirements.minimal.soundCard && (
                            <li>
                                <p>Звуковая карта</p>
                                <span>
                                    {product.requirements.minimal.soundCard} ГБ
                                </span>
                            </li>
                        )}
                    </ul>
                    <hr />
                    <h2>Рекомендуемые системные требования</h2>
                    <ul>
                        <li>
                            <p>ОС</p>
                            <span>{product.requirements.recommended.os}</span>
                        </li>
                        <li>
                            <p>Процессор</p>
                            <span>
                                {product.requirements.recommended.processor}
                            </span>
                        </li>
                        <li>
                            <p>Оперативная память</p>
                            <span>
                                {product.requirements.recommended.ram} ГБ ОЗУ
                            </span>
                        </li>
                        {product.requirements.recommended.network && (
                            <li>
                                <p>Подключение к интернету</p>
                                <span>
                                    {product.requirements.recommended.network}
                                </span>
                            </li>
                        )}
                        <li>
                            <p>Видеокарта</p>
                            <span>
                                {product.requirements.recommended.videoCard}
                            </span>
                        </li>
                        <li>
                            <p>DirectX</p>
                            <span>
                                {product.requirements.recommended.directX}
                            </span>
                        </li>
                        <li>
                            <p>Место на диске</p>
                            <span>
                                {product.requirements.recommended.diskStorage}{' '}
                                ГБ
                            </span>
                        </li>
                        {product.requirements.recommended.soundCard && (
                            <li>
                                <p>Звуковая карта</p>
                                <span>
                                    {product.requirements.recommended.soundCard}{' '}
                                    ГБ
                                </span>
                            </li>
                        )}
                    </ul>
                </>
            )}
        </div>
    )
}

export default RequirementsView
