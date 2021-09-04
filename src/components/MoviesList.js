import React from 'react'
import {Card,CardMedia,CardActionArea,CardHeader,CardContent,Typography} from '@material-ui/core';
import '../assets/movie-list.css'


const MoviesList = (props) => {
    const {genre,data} = props

    return (
        <div className="container">
            <h1>{genre}</h1>
            <div className="wrapper-grid">
                {
                    data.map(movie => {
                        return <Card key={movie.id} className="card">
                        <CardActionArea>
                        <CardHeader
                            className="card-header"
                            title={movie.title}
                            subheader={movie.released_on.slice(0,4)}
                          />
                          <CardMedia
                            className="banner-img"
                            image={movie.backdrop}
                            title={movie.title}
                            />
                          <CardContent className="card-title">
                            <Typography gutterBottom variant="h6" noWrap={true}>
                              {`Age : ${movie.classification}`} | {`Rating : ${movie.imdb_rating}`} | {movie.length}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    })
                }
            </div>
        </div>
    )
}

export default MoviesList