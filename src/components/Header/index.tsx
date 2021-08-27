import React, { useRef } from 'react';
import { Container, Categorias } from './styles';
import SearchMovie from '../SearchMovie';

const Header: React.FC = () => {
    return (
    <Container>
        <a href="/">
        <h1>3035 Filmes.</h1>
        </a>
        <Categorias>
            <a href='/'>Tendências</a>
            <a href='/mais-votados'>Mais votados</a>
        </Categorias>
        <SearchMovie />
        
    </Container>
);}

export default Header;