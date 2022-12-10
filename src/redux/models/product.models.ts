export interface IProductsData {
    limit: number
    page: number
    products: IProduct[]
    pages: number
    total: number
}

export interface IProduct {
    _id: string
    img: string
    title: string
    platform: string
    availability: boolean
    releaseDate: string
    price: number
    developer: string
    publisher: string
    genre: string[]
    description?: IDescription
    requirements?: {
        minimal: IRequirements
        recommended: IRequirements
    }
    licenseKeys: string[]
    toSlider: boolean
    sliderImg: string
}

export interface IDescription {
    title: string
    text: string
}

export interface IRequirements {
    os: string
    processor: string
    ram: number
    videoCard: string
    directX: string
    network?: string
    diskStorage: number
    soundCard?: string
}
