import React from 'react';
import { WhatList } from '../../Components/WhatList/WhatList';

export const AllItems = (props) => (
    <div>
        <WhatList items={props.items} />
    </div>
)