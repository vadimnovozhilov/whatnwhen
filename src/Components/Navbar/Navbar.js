import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
    
`

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: 40px;
    margin-right: 40px;
    list-style: none;
    text-align: center;
`

export const Navbar = () => (
    <StyledNav>
        <StyledUl>
            <li>Today</li>
            <li>Everything</li>
            <li>Archived</li>
        </StyledUl>
    </StyledNav>
)