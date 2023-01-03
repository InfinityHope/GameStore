import React from 'react'
import { Slider, Spinner } from '@/components'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/UI'
import { transformString } from '@/utils/transformString'
import { useGetSliderProductsQuery } from '@/reduxApi/productsAPI/products.api'
import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'

const HomeSlider = () => {
    const { data, isLoading } = useGetSliderProductsQuery(null)
    const cartItems = useAppSelector((state) => state.cart.cartItems)
    const { addCartItem } = useActions()

    if (isLoading) {
        return <Spinner />
    }

    const renderSlides = () => {
        return data?.map((product) => {
            const { _id, img, title, price, serviceActivation, regionActivation } = product
            const existInCart = cartItems.find((cartItem) => cartItem.productId === _id)
            return (
                <Slider.Page key={product._id}>
                    <div>
                        <img src={`/slides/${product.sliderImg}`} alt="slide" />
                    </div>
                    <article>
                        <NavLink to={`/catalog/${transformString(product.title)}`} state={_id}>
                            {product.title}
                        </NavLink>
                        <div>
                            {product.availability ? (
                                <Button
                                    onClick={() =>
                                        addCartItem({
                                            productId: _id,
                                            title,
                                            img,
                                            price,
                                            regionActivation,
                                            serviceActivation,
                                        })
                                    }
                                >
                                    {existInCart ? 'Добавлено' : 'В корзину'}
                                </Button>
                            ) : (
                                <Button>Отсутствует</Button>
                            )}
                            <span>{product.price} ₽</span>
                        </div>
                    </article>
                </Slider.Page>
            )
        })
    }
    return (
        <div>
            <Slider type={'Single'} infinite>
                {renderSlides()}
            </Slider>
        </div>
    )
}

export default HomeSlider
