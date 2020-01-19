import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 30px;
`

const StyledInput = styled.input`
    width: 150px;
    margin-right: 7px;
`

const StyledButton = styled.button`
    background-color: #d2e59e;
    border: none;
    color: #7d3cff;
    text-align: center;
    text-decoration: none;
    font-size: 2rem;

    &:hover {
        background-color: #dcedb9;
        cursor: pointer;
    }
`

export const SubmitForm = () => (
    <StyledForm>
        <StyledInput type="text" placeholder="what?" />
        <StyledInput type="date" />
        <StyledButton>Submit</StyledButton>
    </StyledForm>
)