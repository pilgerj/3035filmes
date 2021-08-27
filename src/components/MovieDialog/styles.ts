import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    text-align: left;
    
    img {
        max-width: 550px;
        float: left;
        padding: 5px 10px 25px 10px;
    }

    p {
        font-size: 20px;
    }

    h1 {
        float: left;
        font-size: 120px;
        padding: 80px 5px 0 20px;
    }

    @media (max-width: 767px) {
        p {
            padding: 5px 5px 5px 5px;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }

        img { 
            max-width: 280px; 
        }

        h1 {
            font-size: 100px;
            padding: 50px 5px 0 65px;
            float: left;
        }
        
        h2 {
            font-size: 20px;
        }
    }
`;

export const InfoTableContainer = styled.div`
    align-items: center;
    margin-top: 55px;
    float: left;
`;