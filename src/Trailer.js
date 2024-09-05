import React from 'react'
import { useParams,Link } from 'react-router-dom'
import './App.css';

const Trailer = (movie) => {
  const id = useParams()
  const foundMovie= movie.find((el) => el.id === +id)
  return (
    <div>
      <h2>{foundMovie.Title} </h2>
      <p> {foundMovie.Description} </p>
      <iframe width="560" height="315" src={foundMovie.trailer}
       title="YouTube video player"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <link to={"/ "} > <button> Back home</button></link>
    </div>
  )
}

export default Trailer
