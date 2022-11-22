import React, {useEffect, useState} from 'react';
import './News.scss'
import {getNews} from "../../api/getNews";
import {INew} from "../../types/types";
import Paginator from "../../components/Paginator/Paginator";
import New from "../new/New";
import Loader from "../../components/Loader/Loader";

const News = () => {
    const [list,setList]=useState<Array<INew>>([])
    const [pageSize,setPageSize]=useState(25)
    const [page,setPage]=useState(1)
    const [totalItemsCount,setTotalItemsCount]=useState(0)
    const [loader,setLoader]=useState(false)
    
    const onPageChanged = async (page:number, pageSize:number) => {
        setLoader(true)
       try {
           setPage(page)
           setPageSize(pageSize)
           const {data} = await getNews({page, pageSize})
           setList(data.articles)
           setTotalItemsCount(data.totalResults)
       }catch (e) {
           alert('Ошибка - Новые статьи доступны с задержкой в 1 час, у бесплатного аккаунта api, есть ограничения :(')
       }finally {
           setLoader(false)
       }
    }

    useEffect(()=>{
        onPageChanged(1,25)
    },[])

    if (loader){
        return <Loader/>
    }

    return (
        <div className='news'>
            <div className='news__list'>
                {list.map((item,index) =>
                   <New key={`${item.author}-${index}`} item={item}/>
                )}
            </div>
                <Paginator
                    totalItemsCount={totalItemsCount}
                    pageSize={pageSize}
                    currentPage={page}
                    onPageChanged={onPageChanged}
                />
        </div>
    );
};

export default News;