import { useState } from "react";

function App() {
  const movies = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
  ];

  return (
    <>
      <div>
        <ul>
          {movies.map(({ title, genre, index }) => {
            return (
              <>
                <li key={index}>{title}</li>
                <li key={index}>{genre}</li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
