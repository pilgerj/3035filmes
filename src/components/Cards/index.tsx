import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Movie } from '../../types';
import MovieDialog from '../MovieDialog';
import { Root, Card, Infos, Chip, ButtonContainer, Title, Lancamento } from './styles';

interface CardsProps {
    movies: Movie[];
}

const Cards: React.FC<CardsProps> = ( {movies} ) => {
    
    function toDateFormat( date: Date ) {
        const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
        const data = new Date(date);
        let formatData = ((data.getDate() + 1 + " de " + meses[(data.getMonth())] + " de " + data.getFullYear()));
        return formatData;
    }
    
    function chipBackgroundColor( vote: number ) {
        let backgroundColor = '';

        if ( vote >= 6 ) {
            backgroundColor = "green";
        } else if ( vote < 6 && vote > 3 ) {
            backgroundColor = "yellow";
        } else if ( vote <= 3 ) {
            backgroundColor = "red";
        };

        return backgroundColor;
    };
    
    return (
    <Root>
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={4}>
                { movies.map( (movie) => (
                    <React.Fragment key={ movie.id }>
                        <Grid item xs={4}>
                            <Card >
                                <Chip backgroundColor={chipBackgroundColor(movie.vote_average)}>
                                    <h1>{movie.vote_average}</h1>
                                </Chip>
                                <img src={`https://image.tmdb.org/t/p/original/` + movie.poster_path} alt="" className="src" />
                                
                                <Infos>
                                    <br/>
                                    <Title><h1>{movie.title}</h1></Title>
                                    <br/>
                                    <Lancamento>
                                        <p>Lançado em</p>
                                        <p>{toDateFormat(movie.release_date)}</p>
                                    </Lancamento>
                                </Infos>

                                <ButtonContainer>
                                    <MovieDialog movie={movie}/>
                                </ButtonContainer>
                            </Card>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
        </Grid>
    </Root>
    );
};
export default Cards;