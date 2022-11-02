import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {

    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
