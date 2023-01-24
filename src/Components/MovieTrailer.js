import { borderBottom, color } from '@mui/system';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';

const MovieTrailer = ({ movies }) => {
    const { title } = useParams();
    const movie = movies.find((e) => e.title === title);
    const style={
    margin: 10,
    width: 140,
    height: 40,
    color: "white",
    backgroundColor :"rgb(0, 102, 255)",
    border: "2px solid #000",
    boxShadow: 24,

    }
    return (
        <div>
            <Link to="/"><button style={style}>Back To Home Page</button></Link>
            <h1>Title: {movie.title}</h1>
            <div className=' dispo'>
            <img style={{ width: 300 }} src={movie.posterUrl} alt={movie.title} />
            <iframe width="760" height="515" src={`https://www.youtube.com/embed/${movie.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <p>Description: {movie.description}</p>
            {/* <YouTube videoId={movie.trailer} /> */}
        </div>
    )
}

export default MovieTrailer