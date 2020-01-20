import React from 'react';
import { WhatItem } from '../WhatItem/WhatItem.js';
import styled from 'styled-components';

const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

export const WhatList = props => {
    return (
        <StyledList>
            {props.items.map(item => (
                <WhatItem key={item.id} item={item} handleArchive={props.handleArchive} />
            ))}
        </StyledList>
    )
}