import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import { Header, Title, HeaderContent } from './styles';

import Logo from '../../assets/logo.png';

function MainHeader({  }) {

    return (
        <Header>
            <HeaderContent>
                <Link to='/'>
                    <img src={Logo}/>
                </Link>

                <div>
                    <Link style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }} to='/launches'>Teste</Link>
                    <Link to='/launches'>
                        <Title>Launches</Title>
                    </Link>
                    <Link to='/launches'>
                        <Title>Launches</Title>
                    </Link>
                    <Link to='/launches'>
                        <Title>Launches</Title>
                    </Link>
                </div>
            </HeaderContent>
        </Header>
    );
}

export default withRouter(MainHeader);
