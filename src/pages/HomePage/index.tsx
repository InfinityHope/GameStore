//Компоненты
import HomeSlider from './HomeSlider/HomeSlider'
import HomeTabs from './HomeTabs/HomeTabs'

const HomePage = () => {
    return (
        <>
            <HomeSlider />
            <div className="container">{<HomeTabs />}</div>
        </>
    )
}

export default HomePage
