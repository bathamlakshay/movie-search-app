import { useState } from 'react'
import './App.css'
import MovieCard from './components/Moviecard'

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])

  const API_KEY = "5506bc6a"

  const searchMovies = async() => {
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`)
    const data = await response.json()
    console.log(data)
   
    if(data.Search){
      setMovies(data.Search)
    }else{
      setMovies([])
    }

  }

  return (
    <>
            <h1 className="text-3xl text-center mt-10">Movie Search App</h1>

            <div className='flex justify-center mt-6'>
              <input
               type="text"
               placeholder='search for a movie'
               className='border p-2 rounded-1 w-72'
               value={search}
               onChange={(e) => setSearch(e.target.value)} />
               
               <button
               className='bg-black 
               text-white p-2 rounded-r-md'
               onClick={searchMovies}>search</button>
            </div>

            <div className='grid grid-cols-4 gap-4 mt-8 px-8'>
              {movies.map((movie,index) => (
                <MovieCard
                key={`${movie.imdbID}-${index}`}
                title={movie.Title}
                poster={movie.Poster}
                year= {movie.Year}
                type={movie.Type}/>
              ))}
            </div>
    </>
  )
}

export default App
