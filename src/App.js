import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="*" element={<h1> Not Found </h1>} />
            </Routes>
        </Layout>
    );
};

export default App;