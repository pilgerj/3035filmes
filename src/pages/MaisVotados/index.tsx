import { useState, useEffect } from 'react';
import api from '../../services/api';
import Pagination from '@material-ui/lab/Pagination';
import Cards from '../../components/Cards'
import { Movie } from '../../types';
import { Container } from './styles';

const MaisVotados = () => {
    const [page, setPage] = useState<number>(1);
    
    const [movies, setMovies] = useState<Movie[]>( () => {
        api.get('/3/movie/top_rated', {
            params: {
                'page': 1,
            }
        }).then(response => {
            const data = response.data;
            const sortedMovies = !!data && !!data.results ? data.results.sort( (a: Movie, b: Movie) => ( b.vote_average > a.vote_average ? 1 : -1) ) : [];
            return setMovies(sortedMovies)
        });
        return [];
    });

    const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo(0, 0);
    }

    useEffect( () => {
        api.get('/3/movie/top_rated', {
            params: {
                'page': page,
            }
        }).then(response => {
            const data = response.data;
            const sortedMovies = !!data && !!data.results ? data.results.sort( (a: Movie, b: Movie) => ( b.vote_average > a.vote_average ? 1 : -1) ) : [];
            setMovies(sortedMovies);
        });
    }, [page] );

    return (
        <>
        <Container>
            <h1>Os Filmes mais Votados</h1>

            <br/>
            <Pagination page={page} onChange={changePage} count={10} />
            <br/>
            <Cards movies={movies} />

            <br/>
            <Pagination page={page} onChange={changePage} count={10} />
            <br/>
            <br/>
            <br/>
        </Container>
        </>
    );
};

export default MaisVotados;