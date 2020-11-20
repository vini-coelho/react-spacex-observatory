import React from 'react';

import { Container, Label } from './styles';

export default function Button({ onPress, label }: any) {
    return (
        <Container onClick={onPress}>
            <Label>{label}</Label>
        </Container>
    );
}
