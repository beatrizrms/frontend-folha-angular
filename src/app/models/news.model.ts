
export interface IGroupNews {
    name: string,
    type?: string,
    news: INew[]
}

export interface INew {
    img: string,
    title: string,
    description?: string,
    imgdescription?: string
}