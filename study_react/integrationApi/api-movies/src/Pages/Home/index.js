// wrhite the page
import image from './smileviolet.jpg';
import { Container, MovieList, Movie } from './style';
import { useState, useEffect } from 'react';
import { apikey } from '../../config/key';

function Home() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org')
    }, [])

    return (
        <Container>
            <h1> Movies </h1>
            {/* Use map for return. ForEach dont return */}
            <MovieList> 
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <a href="https://gogole.com.br">
                                <img src={image} alt={movie.title} />
                            </a>
                            <span> {movie.title} </span>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
