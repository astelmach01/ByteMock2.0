import React from 'react';
import './App.css';
import Logo from "./components/Logo"
import Header from "./components/Header";
import MainContent from "./components/MainContent";


function App() {
    return (
        <div className="App">
            <Logo/>
            <Header/>
            <MainContent/>

        </div>
    );
}

export default App;

