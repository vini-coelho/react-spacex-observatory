import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const Container = styled.button`
    background-color: rgba(0,0,0,0);
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid ${Colors.pink};
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 20px 0 0;

    transition: background 200ms ease;

    :focus {
        outline: none;
    }

    :hover {
        cursor: pointer;
        background-color: ${Colors.pink};
    }
`;

export const Label = styled.span`
    color: ${Colors.pink};
    font-size: 15px;
`;
