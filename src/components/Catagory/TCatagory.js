import React from 'react';

export default function TCatagory({ catagory }) {
    return (
        <div className="t-cata">
            <label htmlFor={catagory.name}>
                <input type="checkbox" name={catagory.name} id={catagory.name} />
                <span>{catagory.name}</span>
            </label>
        </div>
    );
}
