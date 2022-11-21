import * as React from "react";
import './App.scss'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Layout from "./components/layout/Layout";
import News from "./views/news/News";
import Home from "./pages/Home";
import NotPage from "./pages/NotPage";

export default function App() {
    return (
        <div className='App'>
           <Header/>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="news" element={<News />} />
                    <Route path="*" element={<NotPage />} />
                </Route>
            </Routes>
        </div>
    );
}





