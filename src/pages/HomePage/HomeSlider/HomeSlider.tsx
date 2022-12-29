import React from 'react'
import { Slider, Spinner } from '@/components'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/UI'
import { transformString } from '@/utils/transformString'
import { useGetSliderProductsQuery } from '@/reduxApi/productsAPI/products.api'
import { useActions } from '@/hooks/useActions'

const HomeSlider = () => {
    const { data, isLoading } = useGetSliderProductsQuery(null)
    const { addCartItem } = useActions()

    if (isLoading) {
        return <Spinner />
    }

    const renderSlides = () => {
        return data?.map((product) => {
            const { _id, img, title, price, serviceActivation, regionActivation } = product
            return (
                <Slider.Page key={product._id}>
                    <div>
                        <img src={`/slides/${product.sliderImg}`} alt="slide" />
                    </div>
                    <article>
                        <NavLink
                            to={`/catalog/${transformString(product.title)}`}
                            state={{ id: product._id }}
                        >
                            {product.title}
                        </NavLink>
                        <div>
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
                                В корзину
                            </Button>
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
