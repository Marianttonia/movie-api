import { styles } from "./movieList.module.css";

const MovieList = () => {
    return (
<>
        {movies?.map((movie) => {
            const {id, title, poster_path} = movie; 
            return (
                <div key={id} className={styles.ghvhgv}> 
                    <div> 
                        <a href="https://gogole.com.br">
                            <img src={`${img_path}${poster_path}`} alt={title} />
                        </a>
                        <span> {title} </span>
                    </div>
                </div>
            )}
            )}
            </>
    )}
export default MovieList