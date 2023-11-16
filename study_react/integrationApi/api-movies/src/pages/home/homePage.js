import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Carousel from '../../components/corousel/carousel';
import api from '../../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const img_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    populatedMovies();
  }, []);

  function populatedMovies() {
    api.getPopularMovies()
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
        <>    
        <h1>Movies</h1>
        <Header />
        <Carousel movies={movies} img_path={img_path} genre="Popular Movies" />
        {/* Add others genres after */}
        <Footer />
        </>
    );
};

export default HomePage;
