import React from 'react';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

export const SubmitForm = () => (
    <div>
        <input type="text" placeholder="what?" />
        <DateTimePicker />
        <button>Submit</button>
    </div>
)