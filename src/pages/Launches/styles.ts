import styled from 'styled-components';

import Colors from '../../styles/Colors';

export const Container = styled.div`
    background-color: ${Colors.darkGray};
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
`;

export const Body = styled.div`
    max-width: 60%;
    padding: 30px 0;
`;

export const Loading = styled.div`
    background-color: ${Colors.darkGray};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    height: 150px;
    width: 100px;
  }
`;
