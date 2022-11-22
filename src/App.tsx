import * as React from "react";
import './App.scss'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./views/news/News";
import NotPage from "./pages/NotPage";
import Home from "./pages/Home/Home";

export default function App() {
    return (
        <div className='App'>
           <Header/>
            <Routes>
                    <Route index element={<Home />} />
                    <Route path="news" element={<News />} />
                    <Route path="*" element={<NotPage />} />
            </Routes>
        </div>
    );
}





