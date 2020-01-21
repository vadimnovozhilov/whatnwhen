import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    text-align: center;
    background-color: #ffffff;
    border: 3px solid #7d3cff;
    width: 200px;
    min-height: 150px;
`

const StyledArchiveButton = styled.button`
    background-color: #ef2917;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 2rem;
    cursor: pointer;
`

const StyledTitle = styled.p`
    word-break: break-all;
`

export const WhatItem = props => (
    <StyledItem>
        <StyledTitle><strong>What:</strong> {props.item.title}</StyledTitle>
        <p><strong>When:</strong> {props.item.formattedDate}</p>
        <p>{props.item.isActive 
            ? <StyledArchiveButton onClick={() => props.handleArchive(props.item.id)}>Archive</StyledArchiveButton> 
            : 
            ''}</p>
    </StyledItem>
)
