import axios from 'axios'

export const getMovies = () => {
    return (dispatch) => {
        axios.get("https://wookie.codesubmit.io/movies",{
            headers : {
                Authorization : " Bearer Wookie2019"
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(getAllMovies(result))
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export const getAllMovies = (movies) => {
    return {
        type : "GET_MOVIES",
        payload : movies
    }
}