import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const Container = styled.div`
    background-color: ${Colors.mediumGray};
    margin-bottom: 20px;
    border-radius: 15px;
    padding: 20px;
    border: 1px solid ${Colors.softGray};
    display: flex;

    img {
        height: 184px;
    }

    section {
        div#details{
            margin-bottom: 20px;
        }

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        footer {
            display: flex;
        }
        padding: 0 20px;

    }

`;

export const Name = styled.h2`
    color: white;
    font-size: 25px;
`;

export const Details = styled.span`
    color: white;
    font-size: 12px;
    text-align: justify;
`;

export const Date = styled.span`
    color: ${Colors.pink};
    font-size: 15px;
`;
