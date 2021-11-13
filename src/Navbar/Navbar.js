import React from 'react';
import styled from 'styled-components';
import { lambdaEatsRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${lambdaEatsRed};
    padding: 15px;
    margin-top: 0px;
    position: fixed;
    width: 100%;
`
const Logo = styled(Title)`
    font-size: 20px;
    color: white;
`


export function Navbar () {
    return <NavbarStyled>
        <Logo>LAMBDA EATS</Logo>
    </NavbarStyled>
}