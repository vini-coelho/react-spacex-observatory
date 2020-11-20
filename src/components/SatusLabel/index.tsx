import React from 'react';

import { Container, Label } from './styles';

interface StatusProps {
    success: boolean;

}

export default function SatusLabel({ success }: StatusProps) {

    const label = success ? 'Success' : 'Failed';

    return (
        <Container>
            <Label>{label}</Label>
        </Container>
    );
}
