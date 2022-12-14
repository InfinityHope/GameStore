import React from 'react'
import LayoutMain from '../../Layouts/LayoutMain'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Breadcrumbs, Card } from '../../components'
import styles from './Favourite.module.scss'
import { NavLink } from 'react-router-dom'
import { Button } from '../../components/UI'

const FavouritePage = () => {
    const { favourites } = useAppSelector((state) => state.favourite)

    return (
        <LayoutMain>
            <Breadcrumbs
                breadcrumbs={[
                    {
                        link: '/',
                        label: 'Главная',
                    },
                    {
                        link: '/favourite',
                        label: 'Избранное',
                    },
                ]}
            />
            <div className={`${styles.FavouritePage} container`}>
                {favourites.length <= 0 ? (
                    <div className={styles.FavouriteEmpty}>
                        <h3>В вашем избранном пусто :(</h3>
                        <NavLink to={'/catalog'}>
                            <Button>Поискать в каталоге</Button>
                        </NavLink>
                    </div>
                ) : (
                    <div className={styles.Cards}>
                        {favourites.map((favourite) => (
                            <Card
                                {...favourite}
                                _id={favourite.productId}
                                key={favourite.productId}
                            />
                        ))}
                    </div>
                )}
            </div>
        </LayoutMain>
    )
}

export default FavouritePage
