import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    text-align: center;
    background-color: #ffffff;
    border: 3px solid #7d3cff;
    width: 200px;
    height: 150px;
`

export const WhatItem = props => (
    <StyledItem>
        <p>{props.item.title}</p>
        <p>{props.item.date}</p>
    </StyledItem>
)
