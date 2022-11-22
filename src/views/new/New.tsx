import React, {FC} from 'react';
import {INew} from "../../types/types";

const noImage='https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'

type NewProps={
    item:INew
}
const New:FC<NewProps> = ({ item}) => {
    return (
        <div  className='news__list__item'>
            <div className="news__list__item__title">{item.author ? item.author:'Имя автора не указана'}</div>
            <div className="news__list__item__image">
                <img
                    src={item.urlToImage}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src=noImage;
                    }}
                    alt="Картинка" />
            </div>
            <div className="news__list__item__description">{item.description}</div>
        </div>
    );
};

export default New;