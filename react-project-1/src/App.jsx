import './App.css'
import MovieCard from "./components/MovieCard" /*without default --> braces */

function App() {
    return(
      <>
      
      </>
    )

} 

/*braces for variable + braces for object*/

export default App;


  /*Conditional Rendering
  const movieNo = 1; 

   return (
    <>
      {movieNo === 2 ?
      (<MovieCard movie = {{title: "Film #1", release_date: "2024"}}/>) :
      (<MovieCard movie = {{title: "Film #2", release_date: "2024"}}/>)
  }
    </>
    ) 

    return (
    <>
      {movieNo === 1 &&
      <MovieCard movie = {{title: "Film #1", release_date: "2024"}}/>
  }
    </>
    )

  return (
    <> 
      <MovieCard movie = {{title: "Film #1", release_date: "2024"}}/>
      <MovieCard movie = {{title: "Film #2", release_date: "2024"}}/>
      <MovieCard movie = {{title: "Film #3", release_date: "2024"}}/>
      </>
  )*/