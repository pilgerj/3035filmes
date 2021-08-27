import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import styled from "styled-components";
import api from '../../services/api';
import { Container, Error } from './styles';
import { Movie } from '../../types';
import Cards from '../Cards';

interface SearchMovie {
    title?: String;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles( {
        appBar: {
        position: 'relative',
        backgroundColor: 'orange',
        color: 'black',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    }),
);

const StyledButton = styled(Button)`
    && {
        color: orange;
        border: 1px solid orange;
        margin-right: 25px;
        
        &:hover {
            background: orange !important; 
            color: black;
            opacity: 1;
            transition: 0.3s;
            border: 0px !important;
        };

        @media(max-width: 767px) {
            font-size: 10px;
            padding: 5px;
        }
    }
`;

const Transition = React.forwardRef( function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    
    const [search, setSearch] = useState('');
    const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);

    useEffect( () => {
        if( !!search ) {
            api.get('/3/search/movie', {
                params: {
                    'query': search
                }
            }).then( response => {
                const data = response.data;
                const sortedMovies = !!data && !!data.results ? data.results.sort( (a: Movie, b: Movie) => ( b.vote_average > a.vote_average ? 1 : -1) ) : [];
                return setSearchedMovies(sortedMovies)
            });
        }
    }, [search] );
 
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <StyledButton variant="outlined" color="primary" onClick={handleClickOpen}>
            Procurar
        </StyledButton>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Procurar Filmes
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                Fechar
                </Button>
            </Toolbar>
            <Container>
                <input 
                    type="search"
                    placeholder="Busque um filme pelo título"
                    value={search}
                    onChange={ (evt) => setSearch(evt.target.value)}
                />
            </Container>
            </AppBar>
            <Cards movies={searchedMovies} />
        { !!search && searchedMovies.length === 0  &&
             <Error> 
                <h1> Não há resultados para sua busca.</h1>
             </Error>
        }
        </Dialog>
        </div>
    );
}
