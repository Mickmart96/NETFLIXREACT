import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GalleryCustom = ({ url }) => {
  const [movies, setMovies] = useState([]);

  // Componente per l'indicatore successivo
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <div className="custom-arrow next-arrow">&#9654;</div>
      </div>
    );
  };
  
  // Componente per l'indicatore precedente
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <div className="custom-arrow prev-arrow">&#9664;</div>
      </div>
    );
  };

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Errore nella richiesta: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => {
        console.error("Si è verificato un errore durante la richiesta:", error);
      });
  }, [url]);

  if (!movies || movies.length === 0) {
    // Gestisci lo stato di caricamento o il caso senza dati
    return null;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} >
      {movies.slice(0, 16).map((movie) => (
        <div key={movie.imdbID}  className="d-flex  " style={{marginBottom:"50px"}}>
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="img-fluid"
            style={{ maxHeight: '300px' }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default GalleryCustom;