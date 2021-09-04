import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getMovies} from '../actions/moviesActions'
import '../assets/movie-container.css'
import MoviesList from './MoviesList'

const MoviesContainer = () => {

    const [input,setInput] = useState('')

    const dispatch = useDispatch()

    const moviesObj = useSelector((state) => {
        return state.movies
    })

    useEffect(() => {
        dispatch(getMovies())
    },[dispatch])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="movies-container">
            <div className="inner-container">
                <h1>WOOKIE MOVIES</h1>
                <input className="search-bar" type="text" placeholder="Search by Movie Title" value={input} onChange={handleChange}/>
            </div>
            <div>
                {
                    moviesObj.movies && (
                        <div>
                            <MoviesList 
                                genre="Action" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Action")) 
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Action"))
                                } />
                            <MoviesList 
                                genre="Drama" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Drama"))
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Drama"))
                                    } />
                            <MoviesList 
                                genre="Crime" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Crime"))
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Crime"))
                                    } />
                            <MoviesList 
                                genre="Animation" 
                                data={
                                    input.length>0? moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Animation"))
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Animation"))
                                    } />
                            <MoviesList 
                                genre="Adventure" 
                                data={
                                    input.length>0? moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Adventure"))
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Adventure"))
                                    } />
                            <MoviesList 
                                genre="Family" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Family"))
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Family"))
                                    } />
                            <MoviesList 
                                genre="Thriller" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Thriller")) 
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Thriller"))
                                    } />
                            <MoviesList 
                                genre="Biography" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Biography")) 
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Biography"))
                                    } />
                            <MoviesList 
                                genre="History" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("History")) 
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("History"))
                                    } />
                            <MoviesList 
                                genre="Sci-Fi" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Sci-Fi")) 
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Sci-Fi"))
                                    } />
                            <MoviesList 
                                genre="Romance" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Romance")) 
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Romance"))
                                    } />
                            <MoviesList 
                                genre="War" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("War")) 
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("War"))
                                    } />
                            <MoviesList 
                                genre="Mystery" 
                                data={
                                    input.length>0? 
                                    moviesObj.movies.filter(ele => ele.title.toLowerCase().includes(input.toLowerCase())).filter((ele) => ele.genres.join('').includes("Mystery")) 
                                    : moviesObj.movies.filter((ele) => ele.genres.join('').includes("Mystery"))
                                    } />
                        </div>
                    ) 
                }
            </div>
        </div>
    );
}

export default MoviesContainer;
