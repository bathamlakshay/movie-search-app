function Modal({movie , onClose}){
 
    return(
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
        onClick={onClose}>

      <div className="bg-gray-900 rounded-xl max-w-2xl w-full p-6 flex gap-6"
      onClick={(e) => e.stopPropagation()}>
      
      <img src={movie.poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x400?text=No+Poster'} alt={movie.Title} 
      className="w-48 h-72 object-cover rounded-lg flex-0"
      />

    <div className="flex flex-col gap-3">
        <h2 className="text-white text-2xl font-bold">{movie.Title}</h2>
        <p className="text-gray-400 text-sm">{movie.Year} • {movie.Genre}</p>
        <p className="text-yellow-400 text-sm">⭐ {movie.imdbRating} / 10</p>
        <p className="text-gray-300 text-sm leading-relaxed">{movie.Plot}</p>
        <p className="text-gray-400 text-sm"><span className="text-white font-medium">Director: </span>{movie.Director}</p>
        <p className="text-gray-400 text-sm"><span className="text-white font-medium">Cast: </span>{movie.Actors}</p>
        
        <button 
            onClick={onClose}
            className="mt-auto bg-red-600 text-white px-4 py-2 rounded-lg text-sm w-fit">
            Close
        </button>
    </div>

      </div>
        </div>
    )
    

}

export default Modal