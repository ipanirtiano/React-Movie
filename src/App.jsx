import { useEffect, useState } from "react"
import { getMoviesList, searchMovie } from "./api"

function App() {
  const [nowShowingMovie, setNowShowingMovie] = useState([])

  const movie = async (data = 'now_playing') => {
    const movieList = await getMoviesList(data)
    setNowShowingMovie(movieList);
  }

  const search = async (e) => {
    if(e.length > 3){
      const query= await searchMovie(e)
      setNowShowingMovie(query);
    }
  }

  useEffect(() => {
    movie();
  }, []);

  const MovieList = () => {
    const img_url = "https://image.tmdb.org/t/p/w500";
    return nowShowingMovie.map((movie, i) => {
      return(
          <div className="w-[30%] md:w-[230px] bg-white shadow-xl" key={i}>
              <div className="w-full h-[140px] sm:h-[250px] bg-white p-1">
                <img src={`${img_url}/${movie.poster_path}`} alt="" className="bg-slate-700 w-full h-full object-cover" />
              </div>
              <div className="w-full pb-3 px-2 md:px-3">
                  <h1 className="text-[8px] md:text-lg font-semibold h-[15px] overflow-hidden md:h-[30px]">{movie.title}</h1>
                  <p className="text-[6px] md:text-[12px] text-slate-600">{movie.release_date}</p>
                  <p className="text-[6px] md:text-[12px] text-slate-900 h-[25px] md:h-[55px] overflow-y-hidden">{movie.overview}</p>
                  <p className="text-[8px] md:text-[12px] text-slate-900 mt-1 flex items-center font-bold"><span className="material-symbols-outlined mr-1 text-[8px] md:text-[18px]">star</span> {movie.vote_average}</p>
              </div>
          </div>
      )
    })
  }

  return (
    <>
        <div className="w-full">
          {/* header */}
          <div className="flex w-full justify-center flex-row-reverse md:justify-between items-center p-4 mb-2 flex-wrap md:mb-5 bg-slate-800 gap-2 md:px-9 shadow-xl fixed top-0">
            <input type="text" className="relative border-none outline-none py-2 px-5 rounded-sm font-semibold text-slate-800 w-full md:w-[400px] placeholder:text-[12px] placeholder:text-slate-800" placeholder="Search Movie.." onChange={({target}) => search(target.value)} />
            <div className="flex justify-center items-center gap-5 md:gap-9">
            <a className="text-base text-white cursor-pointer hover:text-slate-200" onClick={() => movie('popular')}>Pupular Movie</a>
            <a className="text-base text-white cursor-pointer hover:text-slate-200" onClick={() => movie('top_rated')}>Top Movies</a>
            <a className="text-base text-white cursor-pointer hover:text-slate-200" onClick={() => movie('upcoming')}>Upcoming Movie</a>
            </div>
          </div>
          {/* end header */}
          <div className="flex justify-center items-center gap-2 flex-wrap px-2 mt-[90px] pb-[40px]">
            <MovieList />
          </div>
        </div>
    </>
  )
}

export default App
