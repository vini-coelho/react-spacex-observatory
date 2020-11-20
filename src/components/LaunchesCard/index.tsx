import React from 'react';

import moment from 'moment';

import { Container, Name, Details, Date } from './styles';
import StatusLabel from '../SatusLabel';
import Button from '../Button';

export default function Launches({ item }: any): JSX.Element{
    return (
        <Container>
            <img src={item.links.patch.large} alt=""/>
            <section>
                <header>
                    <Name>{item.name}</Name>
                    <StatusLabel success={item.success}/>
                </header>
                <Date>{moment.utc(item.date_utc).format('DD/MM/YYYY')}</Date>
                <div id="details">
                    <Details>{item.details}</Details>
                </div>

                <footer>
                    <Button 
                    label='Mission Details' 
                    onPress={() => { window.location.href='http://google.com'} }/>
                    <Button 
                    label='Read on Wikipedia' 
                    onPress={() => { window.location.href=item.links.wikipedia }}/>
                    <Button 
                    label='Watch on Youtube' 
                    onPress={() => { window.location.href=item.links.webcast }}/>
                </footer>
            </section>
        </Container>
    )
}