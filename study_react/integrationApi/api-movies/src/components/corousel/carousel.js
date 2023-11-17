import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from './carousel.module.css';

const Carousel = ({movies, img_path}) => {
    const responsive = {
        0: { items: 1 },
        600: { items: 4, itemsFit: 'contain' },
        1024: { items: 8, itemsFit: 'contain'},
    };

    return (
        <AliceCarousel
            responsive={responsive}
            infinite={true}
            mouseTracking
        > 
            {movies?.map((movie) => {
                    const { id, title, poster_path } = movie;
                    return (
                        <div key={id} className={styles.carouselItem}>
                            <div className={styles.items} >
                                <a href="https://gogole.com.br">
                                    <img
                                        src={`${img_path}${poster_path}`}
                                        alt={title}
                                    />
                                </a>
                                <span> {title} </span>
                            </div>
                        </div>
                    );
                })}
        </AliceCarousel>
    );
};

export default Carousel;