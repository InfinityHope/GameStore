//Библиотеки
import { useEffect } from 'react'
//Типы
import { IProduct } from '../../redux/models/IProduct'
//Хуки
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux'
//Асинхронные функции
import { fetchProducts } from '../../redux/reducers/ProductsReducer/asyncActions'
//Компоненты
import { Link } from 'react-router-dom'
import { Cards, Slider, Spinner } from '../../components'
import { Button } from '../../components/UI'
import LayoutMain from '../../Layouts/LayoutMain'

const HomePage = () => {
    const { isLoading, products } = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const renderSlides = () => {
        return products
            .filter((product: IProduct) => product.toSlider)
            .map((product: IProduct) => {
                return (
                    <Slider.Page>
                        <div>
                            <img
                                src={`${process.env.PUBLIC_URL}/slides/${product.sliderImg}`}
                                alt="slide"
                            />
                        </div>
                        <article>
                            <Link to={`/catalog/${product._id}`}>
                                {product.title}
                            </Link>
                            <div>
                                <Button>В корзину</Button>
                                <span>{product.price} ₽</span>
                            </div>
                        </article>
                    </Slider.Page>
                )
            })
    }
    return (
        <LayoutMain>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <Slider type={'Single'}>{renderSlides()}</Slider>
                    <div className="container pt-24">
                        <Cards products={products} />
                    </div>
                </>
            )}
        </LayoutMain>
    )
}

export default HomePage
