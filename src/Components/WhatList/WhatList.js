import React from 'react';
import { WhatItem } from '../WhatItem/WhatItem.js';
import styled from 'styled-components';

const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const WhatList = props => {
    return (
        <StyledList>
            {props.items.map((item, index) => (
                <WhatItem key={index} item={item} />
            ))}
        </StyledList>
    )
}