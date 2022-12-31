import React from 'react';
import FCatagorys from '../Catagory/FCatagory';

export default function Item({ item }) {
    return (
        <>
            <header>{item.item.name}</header>
            {item.f_Catagorys?.map((catagory) => (
                <FCatagorys catagory={catagory} key={catagory.value} item={item.item} />
            ))}
        </>
    );
}
