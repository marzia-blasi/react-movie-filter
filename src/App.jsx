import { useState, useEffect } from "react";

function App() {
  const movies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  const [searchMovies, setsearchMovies] = useState("");

  const handleValue = (e) => {
    const searchMovie = e.target.value;
    setsearchMovies(searchMovie);
    console.log(searchMovie);
  };

  return (
    <>
      <div>
        <input type="text" value={searchMovies} onChange={handleValue} />
        <ul>
          {movies.map(({ title, genre, index }) => {
            return (
              <li key={index}>
                {title}
                <p>{genre}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
