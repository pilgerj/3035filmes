import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    margin-top: 50px;
    
    h1 {
        text-align: center !important;
    }

    @media (max-width: 767px) {
        h1 {
            padding: 5px;
            text-align: center !important;
        }
    }
`;

