import styled from 'styled-components';

export const Container = styled.div`

    position: sticky;
    top: 0;
    background-color:black;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    padding: 20px 0 20px 0;
    overflow: hidden;
    box-shadow: 0 0 5px 5px gray;

    h1 {
        padding: 15px 50px 15px 50px;
        letter-spacing: 2px;
        font-weight: bold;
        color: #FF8C00;
    }

    a {
        padding: 10px 5px 10px 5px;
        text-align: center;
        border-radius: 50px;
        box-shadow: inset 0 2px #FF8C00;
        letter-spacing: 2px;
        font-size: 15px;
        font-weight: bold;
        color: #FF8C00;
        text-decoration: none;
    }

    @media (max-width: 767px) {
        justify-content: center;
        h1 {
            padding: 5px 40px 15px 40px;      
            margin: 5px;      
            letter-spacing: 3px;
            font-weight: bold;
            color: #FF8C00;
        }
    }
`;

export const Categorias = styled.div`
    a {
        padding: 10px;
        float: left;

        &:hover {
          background: orange !important; 
          color: black;
          opacity: 1;
          transition: 0.7s;
        }
    }

    @media (max-width: 767px) {
        a {
            font-size: 10px;
            margin: 0 10px 0 10px;;
        }
    }
`;