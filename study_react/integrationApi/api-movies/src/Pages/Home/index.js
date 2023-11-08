// wrhite the page
import image from './smileviolet.jpg'
import { Container, MovieList, Movie } from './style';

function Home() {

    const movies = [
        {
            title: 'Spider man',
            img: './smileviolet.jpg'
        },
        {
            title: 'Violet Evergarden',
            img: './smileviolet.jpg'
        },
        {
            title: 'Batgirl',
            img: './smileviolet.jpg'
        }
    ]
    
    return (
        <Container>
            <h1> Movies </h1>

            <MovieList>

                {movies.map(movie =>  {
                    return (
                        <Movie>
                        <a href='https://gogole.com.br'>
                            <img src={image} alt={movie.title}/>
                        </a> 
                        <span> {movie.title} </span>
                    </Movie>
                    )}
                )}

            </MovieList>
        </Container>
    );
}

export default Home;