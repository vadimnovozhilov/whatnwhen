import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    text-align: center;
`

const StyledLi = styled.li`
    cursor: pointer;
    margin-right: 20px;

    &:hover {
        border-bottom: 5px solid #7d3cff;
    }
`

export const Navbar = () => (
    <nav>
        <StyledUl>
            <StyledLi>Today</StyledLi>
            <StyledLi>Everything</StyledLi>
            <StyledLi>Archived</StyledLi>
        </StyledUl>
    </nav>
)