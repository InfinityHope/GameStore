//Компоненты
import LayoutMain from '../../Layouts/LayoutMain'
import HomeSlider from './HomeSlider/HomeSlider'
import HomeTabs from './HomeTabs/HomeTabs'

const HomePage = () => {
    return (
        <LayoutMain>
            <HomeSlider />
            <div className="container pt-24">
                <HomeTabs />
            </div>
        </LayoutMain>
    )
}

export default HomePage
