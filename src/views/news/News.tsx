import React, {useEffect, useState} from 'react';
import './News.scss'
import {getNews} from "../../api/getNews";
import {INew} from "../../types/types";
import Paginator from "../../components/Paginator/Paginator";


const News = () => {
    const [list,setList]=useState<Array<INew>>([])
    const [pageSize,setPageSize]=useState(20)
    const [currentPage,setCurrentPage]=useState(1)
    const [totalItemsCount,setTotalItemsCount]=useState(0)
console.log('list',list)

    const onPageChanged = (currentPage: number) => {
        getNews({currentPage, pageSize}).then(data => {
            setList(data.data.articles)
            setTotalItemsCount(data.data.totalResults)
        })
    }

    useEffect(()=>{
        getNews({pageSize,currentPage}).then(data => {
            setList(data.data.articles)
            setTotalItemsCount(data.data.totalResults)
        })
    },[])

    return (
        <div className='news'>
            <div className='news__list'>
                {list.map((item,index) =>
                    <div key={`${item.author}-${index}`} className='news__list__item'>
                        `${item.author}-${index}`
                    </div>
                )}
            </div>
            <div className='news__pagination'>
                <Paginator
                    totalItemsCount={totalItemsCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}/>
            </div>
        </div>
    );
};

export default News;