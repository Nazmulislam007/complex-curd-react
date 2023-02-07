import React from 'react';

export default function Company({ select }) {
    return (
        <div className="company">
            <h2 className="company-name">{select.name}</h2>
            <div className="company-catagories">
                {select.f_catagory.map((cata) => (
                    <p key={cata.value}>{cata.name}</p>
                ))}
            </div>
        </div>
    );
}
