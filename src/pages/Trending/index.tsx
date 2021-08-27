import { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Cards from '../../components/Cards'
import api from '../../services/api';
import { Movie } from '../../types';
import { Container } from './styles';

const Trending = () => {
    const [page, setPage] = useState<number>(1);
    
    const [movies, setMovies] = useState<Movie[]>( () => {
        api.get('/3/movie/popular', {
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
        api.get('/3/movie/popular', {
            params: {
                'api_key': 'f0f305ea07f4ae342478fc3fb42cc072',
                'language': 'pt-BR',
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
            <h1>Tendências do Cinema</h1>

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

export default Trending;