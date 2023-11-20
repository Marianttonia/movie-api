import React from 'react';
import styles from './details.module.css';

const Details = ({movieDetails, img_path}) => {
    const {backdrop_path, title, overview, release_date, production_countries, genres, runtime, vote_average } = movieDetails;

    const country = production_countries.length > 0 ? production_countries[0].name : '';
    const genreNames = genres.map((genre) => genre.name).join(', ');

    return (
        <div className={styles.container} >
            <div className={styles.movie} >
                <img className={styles.img} src={`${img_path}${backdrop_path}`} alt={title} />  
            </div>
            <div className={styles.movieDetails} >
                <h1> {title} </h1>
                <section className={styles.info}>
                    <p> {release_date} </p>
                    <p> {country} </p>
                    <p> {runtime} min </p>
                </section>
                <section className={styles.genres} >
                    <p> {genreNames} </p>
                    <p> Average: {vote_average} </p>
                </section>
                <p className={styles.overview} > {overview} </p>
            </div>
        </div>
    )
};

export default Details;