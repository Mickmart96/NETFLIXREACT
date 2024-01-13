import { useState, useEffect } from 'react';




const GalleryCustom = ({ url }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Errore nella richiesta: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setMovies(data.Search);
            })
            .catch((error) => {
                console.error("Si è verificato un errore durante la richiesta:", error);
                
            });
    }, []);

    return (
        <div className="d-flex mx-5 gap-2" style={{marginBottom:"50px"}}>
           {movies.slice(0,7).map((movie) => (
            <img key={movie.imdbID} src={movie.Poster} alt={movie.Title} width="200px" height="300"/>
           ))}
        </div>
    )
}


export default GalleryCustom