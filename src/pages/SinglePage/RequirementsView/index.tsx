//Библиотеки
import { FC } from 'react'
//Стили
import styles from './RequirementsView.module.scss'
//Типы
import { IProduct } from '@/models/product.models'
import { Accordion } from '@/components'
import RequirementList from './RequirementList'

const RequirementsView: FC<{ product: IProduct }> = ({ product }) => {
    return (
        <div className={styles.Requirements}>
            {product.requirements && (
                <>
                    <Accordion
                        data={[
                            {
                                title: 'Минимальные системные требования',
                                content: (
                                    <RequirementList requirements={product.requirements.minimal} />
                                ),
                            },
                            {
                                title: 'Рекомендуемые системные требования',
                                content: (
                                    <RequirementList
                                        requirements={product.requirements.recommended}
                                    />
                                ),
                            },
                        ]}
                    />
                </>
            )}
        </div>
    )
}

export default RequirementsView
