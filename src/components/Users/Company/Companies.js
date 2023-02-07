import React from 'react';
import './Companies.css';
import Company from './Company';

export default function Companies({ selected }) {
    return (
        <div className="companies">
            {selected.map((select) => (
                <Company select={select} key={select.value} />
            ))}
        </div>
    );
}
