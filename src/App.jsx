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
  const [filteredMovie, setfilterdMovie] = useState(movies);

  const handleValue = (e) => {
    const searchMovie = e.target.value;
    setsearchMovies(searchMovie);
    console.log(searchMovie);
  };

  {
    /**
  useEffect(() => {
    const filtered = movies.filter((movie) => {
      movie.title.toLocaleLowerCase().includes(searchMovies.toLowerCase());
      setfilterdMovie(filtered);
    });
  }, [searchMovies]);
 */
  }
  return (
    <>
      <div>
        <input type="text" value={searchMovies} onChange={handleValue} />

        <select>
          {movies.map(({ title, genre, index }) => {
            return <option key={index}>{genre}</option>;
          })}
        </select>
      </div>
    </>
  );
}

export default App;
