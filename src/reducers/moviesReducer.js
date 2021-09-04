const initialStateValue = {}

const moviesReducer = (state=initialStateValue,action) => {

    switch(action.type) {

        case "GET_MOVIES" : {
            return {...state,...action.payload}
        }
        default : return {...state}
    }
}

export default moviesReducer