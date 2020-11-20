import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const Header = styled.header`
    background-color: ${Colors.mediumGray};
    height: 72px;
    border-bottom: 1px solid ${Colors.softGray};
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    height: 72px;
    padding: 0 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 30px;
    }

    div{
        display: flex;
        height: 100%;
        background-color: green;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Title = styled.span`
    color: white;
    margin-left: 20px;
    font-size: 15px;
`;
