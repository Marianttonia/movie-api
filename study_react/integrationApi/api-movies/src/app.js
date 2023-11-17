import React from 'react';
import './global.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MoviePage from './pages/movie/moviePage';
import HomePage from './pages/home/homePage';


function App() {
    
    return (
        <React.StrictMode>
            <BrowserRouter>
            <Routes> 
                <Route path='/' element= {<HomePage/>} />
                <Route path='me/:id' element= {<MoviePage/>} />
            </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );

}

export default App;