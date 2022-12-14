
export interface INew{
    source: {
        id: string
        name: string
    },
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export interface IResponseGetNews{
    status: string,
    totalResults: number,
    articles:Array<INew>
}