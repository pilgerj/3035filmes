import styled from 'styled-components';

interface ChipProps {
    backgroundColor: string;
};

export const Root = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 2px;
`;

export const Card = styled.div`
    padding: 0 20px 30px 20px;
    margin: 5px 10px 5px 10px;
    min-width: 430px;
    max-width: 430px;

    box-shadow: 0 0 1em gray;
    border-radius: 15px;
    border: 2px solid;
    background-color: gray;
    
    img {
        text-align: left;
        height: 250px;
        width: 180px;
        margin: 0;
        padding: 0;
        border: 2px solid;
        border-radius: 5px;
    }

    @media(max-width: 767px) {
        margin: 0 2px 0 2px;
        min-width: 120px;
        width: 100%;
        height: 410px;
        padding: 5px;

        box-shadow: 0;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;

        h1 {
            font-size: 10px;
        }

        img {
            margin: 0;
            height: 150px;
        }
    }
`;

export const Title = styled.div`

    h1 {
        font-size: 17px;
        font-weight: bold;
        text-align: center !important;
        padding: 0 5px 15px 5px;
        height: 55px;
    }

    @media (max-width: 767px) {    
        h1 {
            width: 200px;
            height: 50px;
            font-size: 15px !important;
            text-align: center !important;
            overflow: hidden;
            text-overflow: ellipsis; 
            white-space: pre-wrap; 
        }
    }
`;

export const Lancamento = styled.div`
    text-align: center;
    font-size: 14px;
    background-color: #FFD700;
    box-shadow: 0 0 1em #FFD700;
    padding: 5px;
    font-weight: bold;
    border-radius: 10px;

    @media (max-width: 767px) {
        width: 200px;
        height: 50px;
        p {
            font-size: 13px !important;
        }
    }
`;

export const Infos = styled.div`
    float: right;
    margin: 10px 20px 0 5px;
    padding: 5px 5px 30px 5px;
    width: 11em;
    height: 190px;
    
    background-color: orange;
    box-shadow: 7px 5px 10px red;
    border-radius: 5px;

    h1 {
        margin: 0;
        font-size: 15px;
        text-align: left;
        margin: 1px;
    }

    h3 {
        font-size: 15px;
        text-align: left;
        margin: 1px;
    }

    @media(max-width: 767px) {
        margin: 0;
        height: 13em;
        box-shadow: 1px 2px 2px red;
        border-radius: 5px;

        p {
            font-size: 15px;
        }
    }
`;

export const Chip = styled.div<ChipProps>`
    transform: translateY(30px) ;
    text-align: center;
    position: unset;
    padding: 0 10px;
    width: 50px;
    
    color: white;
    background: ${ (props) => props.backgroundColor };
    border-radius: 0 5px 5px 0;

    h1 {
        font-size: 20px;
    }

    @media(max-width: 767px) {
        h1 {
            font-size: 18px;
        }
    }
`;

export const ButtonContainer = styled.div`
    padding: 10px;
    z-index: 40px;
    float: right;
    transform: translateY(-50px) translateX(-50px);
    
    color: white;

    @media(max-width: 767px) {
        transform: translateY(-50px) translateX(0px);
        padding: 0;
        margin: 0 10px 0 5px;
    }
`;