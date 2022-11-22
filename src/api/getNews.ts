import {Axios} from "../core/Axios";
import {IResponseGetNews} from "../types/types";

interface IGetNewsAPI {
    pageSize:number
    page:number
}
export const getNews = async (requestOptions:IGetNewsAPI) => {
    return await Axios.get<IResponseGetNews>(`/v2/everything?q=news&page=${requestOptions.page}&pageSize=${requestOptions.pageSize}`)
}