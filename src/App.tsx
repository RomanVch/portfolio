import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Header} from "./components/Header";
import {MainBlock} from "./components/MainBlock";
import {Skils} from "./components/Skills";
import {Work} from "./components/Work";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {MyWorks} from "./components/myWorks";


function App() {
    return (
        <div className={"main-grid"}>
            <Header/>
            <div className={"main__block-flex"}>
            <MainBlock/>
            <Skils/>
            </div>
            <MyWorks/>
            <div className={"main__block-work"}>
            <Work/>
            <Contact/>
            </div>
            <Footer/>
        </div>
    )}

export default App;
