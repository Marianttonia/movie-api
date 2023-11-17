import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Carousel from '../../components/corousel/carousel';
import Footer from '../../components/footer/footer';
import { getPopularMovies, getGenres, getMoviesByGenre } from '../../services/api';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreMovies, setGenresMovies] = useState([]);
  const img_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    populatePopularMovies();
    populateGenres();
  }, []);

  const populatePopularMovies = async () => {
    try {
      const popularMoviesData = await getPopularMovies();
      setMovies(popularMoviesData);
    } catch (e) {
      console.log('Erro ao buscar filmes populares: ', e);
    }
  };

  const populateGenres = async () => {
    try {
      const genreList = await getGenres();
      setGenres(genreList.genres);

      const genreMoviesMap = {};
      for (const genre of genreList.genres) {
        const movies = await getMoviesByGenre(genre.id);
        genreMoviesMap[genre.id] = movies;
      }
      setGenresMovies(genreMoviesMap);
    } catch (e) {
      console.log('Erro ao buscar lista de gêneros: ', e);
    }
  };

  return (
    <div className='home'>
      <Header />
        <div>
          <h1> Filmes Populares </h1>
          <Carousel movies={movies} img_path={img_path} genre="Popular Movies" />
        </div>
        <div>
          <h1> Filmes por Gênero </h1>
            {/* Renderiza carrossel para cada gênero */}
          {genres.map(genre => (
          <div key={genre.id}>
            <h2>{genre.name}</h2>
            <Carousel movies={genreMovies[genre.id]} />
          </div>
          ))}
        </div>
      <Footer />
    </div>
  );
};

export default HomePage;