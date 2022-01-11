import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/Home';
import Repositorio from './pages/Repositorio';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/repositorio" exact element={<Repositorio/>}>
                    <Route exact path=":repos" element={<Repositorio/>}/> 
                </Route>
                
            </Routes>
        </BrowserRouter>
    )
}