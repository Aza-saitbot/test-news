import React from 'react';
import '../../App.scss'
import {Link, Outlet} from "react-router-dom";

const list=[
    { path:'/', title:'Home' },
    { path:'/news', title:'News' },
]

const Layout = () => {
    return (
        <div className='App__navbar'>
            <nav>
                <ul>
                    {list.map(({ path,title })=>
                        <li key={path}>
                            <Link to={path}>{title}</Link>
                        </li>
                    )}
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
};

export default Layout;
