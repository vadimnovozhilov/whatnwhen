import React from 'react';
import { WhatList } from '../../Components/WhatList/WhatList';

export const AllItems = (props) => (
    <div>
        {
            !props.items.length === 0 ? (
                <WhatList items={props.items} handleArchive={props.handleArchive} />
            )
            : (
                <p>Add first whatnwhen</p>
            )
        }
    </div>
)