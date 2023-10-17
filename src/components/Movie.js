import { useEffect, useState } from 'react';
import MovieService from '../services/MovieService';


const Movie = (props) => {
    const initialMovieState = {
        id: '',
        title: '',
        cover: '',
        synopsis: '',
        year: 0,
      };

    const [currentMovie, setCurrentMovie] = useState(initialMovieState);
    
    const [message, setMessage] = useState('');

    const getMovie = id => {
        MovieService.getById(id)
        .then(response => {
            setCurrentMovie(response.data);
        })
        .catch(err => {
            alert('Ocurrio un error');
            console.log(err);
        });
    }

    useEffect(() => {
        if (props.match && props.match.params && props.match.params.id) {
            getMovie(props.match.params.id);
        }
    }, [props.match]);

   

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentMovie({ ...currentMovie, [name]: value });
    }

    

    console.log(currentMovie);
    const updateMovie = () => {
        

        MovieService.update(currentMovie.id, currentMovie)
        .then(response => {
           setMessage('La película fue actualizada !!');
        })
        .catch(err => {
            setMessage('Ocurrió un error');
            console.log(err);
        });
    }

    const deleteMovie = () => {
      
     
        MovieService.remove(currentMovie.id)
        .then(responmse => {
            props.history.push('/movies');
        })
        .catch(err => {
            setMessage('Ocurrió un error !!');
            console.log(err);
        });
   
    }

    

   
    return (
        <div className="submit-form">
               {!currentMovie ? (
                <div>
                   <h4>Selecciona una película...</h4>  
             
                </div>
               ) : (
                <div>
                    <div className="form-group">
                        <label>Título</label>
                        <input 
                           type="text"
                           className="form-control"
                           id="title"
                           required
                           defaultValue={currentMovie.title}
                           onChange={handleInputChange}
                           name="title"
                        />
                    </div>


                    <div className="form-group">
                        <label>Portada</label>
                        <input 
                           type="text"
                           className="form-control"
                           id="cover"
                           required
                           defaultValue={currentMovie.cover}
                           onChange={handleInputChange}
                           name="cover"
                        />
                    </div>

                    <div className="form-group">
                        <label>Sinopsis</label>
                        <input 
                           type="text"
                           className="form-control"
                           id="synopsis"
                           required
                           defaultValue={currentMovie.synopsis}
                           onChange={handleInputChange}
                           name="synopsis"
                        />
                    </div>

                    <div className="form-group">
                        <label>Año</label>
                        <input 
                           type="number"
                           className="form-control"
                           id="year"
                           required
                           defaultValue={currentMovie.year}
                           onChange={handleInputChange}
                           name="year"
                        />
                    </div>
                    <br />
                    <button onClick={updateMovie} className="btn btn-success"> 
                        Guardar Película
                    </button>
                    <button onClick={deleteMovie} className="btn btn-danger"> 
                        Eliminar Película
                    </button>

                      <div>{message}</div>
                </div>
               )}
        </div>
    )
};

export default Movie;

