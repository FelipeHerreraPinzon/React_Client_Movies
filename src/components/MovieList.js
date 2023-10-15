import { useState, useEffect } from "react";
import MovieService from "../services/MovieService";


const MovieList = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        retrieveMovies();
    }, []);


   const retrieveMovies = () => {
       MovieService.getAll()
       .then(response => {
           setMovies(response.data);
           console.log(movies);
       })
      .catch(err => {
          alert("orcurrio un error !!!");
          console.log(err);
      });
   }



   const refreshList = () => {
       retrieveMovies();
   }


    return (
        <div className="row">
           <div className="col-6">
               <h4>Películas</h4>
               <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Título</th>
      <th scope="col">Año</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    {
        movies &&
        movies.map((movie, index) => (
    <tr key={index}>
      <th scope="row">{movie.id}</th>
      <td>{movie.title}</td>
      <td>{movie.year}</td>
      <td></td>
      </tr>
        ))
    }
    
    
  </tbody>
</table>
           </div>
           <div className="col-6">

           </div>
        </div>
    )
};

export default MovieList;

