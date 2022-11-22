import React, {useState} from 'react';
import './Paginator.scss'


type PropsType={
    totalItemsCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(page:number, pageSize:number)=>void
    portionSize?:number
}

const Paginator:React.FC<PropsType> = ({totalItemsCount, pageSize,
                                         currentPage, onPageChanged,
                                         portionSize = 10
}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    /*перебираем по одному элементу, в результате получаем массив */
    let pages:Array <number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    /*//определяем сколь у нас кол-во порции есть */

    const portionCount = Math.ceil(pagesCount / portionSize);

    /*локально сохраняем 1 стартовую порцию страниц */
    const [portionNumber, setPortionNumber] = useState (1);

    /*делаем условие, если в состояние больше 1-го то покажи кнопку*/
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
       <div className='paginator'>
           <div className='paginator__block'>
               {portionNumber > 1 &&
                   <button className='paginator__block__button' onClick={() => {
                       setPortionNumber(portionNumber - 1)
                   }}>Prev</button>}
               {pages
                   .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                   .map((p) => {
                       return <span className={`paginator__block__pageNumber ${currentPage === p ? 'selectedPage' : ''}`}
                                    key={p}
                                    onClick={() => {
                                        onPageChanged(p,pageSize);
                                    }}>{p}</span>
                   })
               }

               {portionCount > portionNumber &&
                   <button onClick={() => {
                       setPortionNumber(portionNumber + 1)
                   }} className='paginator__block__button'>Next</button>}
           </div>
           <div className='paginator__pageSize'>
               <select
                   value={pageSize}
                   onChange={e=>onPageChanged(1,Number(e.target.value))}
                   >
                   <option value={25}>25</option>
                   <option value={50}>50</option>
                   <option value={75}>75</option>
                   <option value={100}>100</option>
               </select>
           </div>
       </div>
    )
}
export default Paginator;