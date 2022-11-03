import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import PicPage from "./containers/PicPage/PicPage";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/nft/:id" element={<PicPage/>} />
                <Route path="*" element={<h1> Not Found </h1>} />
            </Routes>
        </Layout>
    );
};

export default App;