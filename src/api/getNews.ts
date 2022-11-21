import {Axios} from "../core/Axios";
import {IResponseGetNews} from "../types/types";

interface IGetNewsAPI {
    pageSize:number
    currentPage:number
}
export const getNews = async (requestOptions:IGetNewsAPI) => {
    return await Axios.get<IResponseGetNews>(`/v2/everything?q=news&page=${requestOptions.currentPage}&pageSize=${requestOptions.pageSize}`)
}