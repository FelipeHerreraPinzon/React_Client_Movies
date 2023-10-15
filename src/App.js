import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link, Routes, Route } from 'react-router-dom';
import AddMovie from "./components/AddMovie";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" >Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/movies"} className="nav-link active">Películas</Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">Agregar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/movies" element={<MovieList />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
 