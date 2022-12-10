//Библиотеки
import { useEffect } from 'react'
//Стили
import styles from './HomePage.module.scss'
//Хуки
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux'
//Асинхронные функции
import { fetchProducts } from '../../redux/reducers/ProductsReducer/asyncActions'
//Компоненты
import { Link } from 'react-router-dom'
import { Card, Slider, Spinner } from '../../components'
import { Button } from '../../components/UI'
import LayoutMain from '../../Layouts/LayoutMain'
import { ICartItem } from '../../redux/models/cart.models'
import { addCartItem } from '../../redux/reducers/CartReducer'

const HomePage = () => {
    const { isLoadingProducts, products } = useAppSelector((state) => state.products)
    const { cartItems } = useAppSelector((state) => state.cart)
    const dispatch = useAppDispatch()

    const addCartItemHandler = ({ productId, title, img, price }: ICartItem) => {
        dispatch(addCartItem({ productId, price, img, title }))
    }

    useEffect(() => {
        dispatch(fetchProducts({ limit: 8 }))
    }, [dispatch])

    const renderSlides = () => {
        return products
            .filter((product) => product.toSlider)
            .map((product) => {
                const { _id, img, title, price } = product
                return (
                    <Slider.Page key={product._id}>
                        <div>
                            <img
                                src={`${process.env.PUBLIC_URL}/slides/${product.sliderImg}`}
                                alt="slide"
                            />
                        </div>
                        <article>
                            <Link to={`/catalog/${product._id}`}>{product.title}</Link>
                            <div>
                                <Button
                                    onClick={() =>
                                        addCartItemHandler({
                                            productId: _id,
                                            title,
                                            img,
                                            price,
                                        })
                                    }
                                >
                                    {cartItems.find(
                                        (cartItem) => cartItem.productId === product._id
                                    )
                                        ? 'Добавлено'
                                        : 'В корзину'}
                                </Button>
                                <span>{product.price} ₽</span>
                            </div>
                        </article>
                    </Slider.Page>
                )
            })
    }
    return (
        <LayoutMain>
            {isLoadingProducts ? (
                <Spinner />
            ) : (
                <>
                    <Slider autoPlay type={'Single'}>
                        {renderSlides()}
                    </Slider>
                    <div className="container pt-24">
                        <div className={styles.Cards}>
                            {products.map((product) => (
                                <Card type={'Product'} {...product} key={product._id} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </LayoutMain>
    )
}

export default HomePage
