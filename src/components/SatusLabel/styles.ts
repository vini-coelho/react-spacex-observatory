import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const Container = styled.div`
    padding: 5px 20px;
    border-radius: 5px;
    border: 1px solid ${Colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.span`
    color: ${Colors.green};
    font-size: 12px;
`;
