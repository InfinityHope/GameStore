import { FC, ReactNode, useState } from 'react'
import styles from './Accordion.module.scss'

const Accordion: FC<{ data: { title: string; content: ReactNode }[] }> = ({ data }) => {
    const [selected, setSelected] = useState<number | null>(0)

    const toggle = (index: number) => {
        if (selected === index) {
            return setSelected(null)
        }
        setSelected(index)
    }

    return (
        <div className={styles.Accordion}>
            {data.map((item, index) => (
                <div className={styles.Item} key={index}>
                    <div className={styles.Title} onClick={() => toggle(index)}>
                        <h2>{item.title}</h2>
                        <span>{selected === index ? '-' : '+'}</span>
                    </div>
                    <div className={selected === index ? `${styles.Show}` : styles.Content}>
                        {selected === index ? item.content : null}
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Accordion
