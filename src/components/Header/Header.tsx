import React from 'react';
import './Header.scss'
import {Link} from "react-router-dom";

const list=[
    { path:'/', title:'Home' },
    { path:'/news', title:'News' },
]

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1>Главная страница</h1>
            </div>
           <div className='header__listRef'>
               {list.map(({ path,title })=>
                   <div key={path}>
                       <Link to={path}>{title}</Link>
                   </div>
               )}
           </div>
        </div>
    );
};

export default Header;