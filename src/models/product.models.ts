export interface IProductsData<T> {
    limit: number
    page: number
    products: T[]
    pages: number
    total: number
}

export interface IProduct {
    _id: string
    img: string
    title: string
    platform: string
    availability: boolean
    releaseDate: Date
    price: number
    developer: string
    publisher: string
    genre: string[]
    description?: IDescription
    requirements?: {
        minimal: IRequirements
        recommended: IRequirements
    }
    language: string
    serviceActivation: string
    regionActivation: string
    screenShots: string[]
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
