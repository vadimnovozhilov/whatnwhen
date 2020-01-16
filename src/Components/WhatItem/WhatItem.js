import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    background-color: red;
    border: 1px solid black;
    width: 200px;
    height: 200px;
`

export const WhatItem = props => (
    <StyledItem>
        <p>{props.item.title}</p>
        <p>{props.item.date}</p>
    </StyledItem>
)
