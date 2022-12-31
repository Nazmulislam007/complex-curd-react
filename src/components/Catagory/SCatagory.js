import React, { useState } from 'react';
import TCatagory from './TCatagory';

export default function SCatagory({ catagory }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="s-cata">
                {catagory?.t_Catagorys ? (
                    <div onClick={() => setShow(!show)}>{catagory.name}</div>
                ) : (
                    <label htmlFor={catagory.name}>
                        <input type="checkbox" name={catagory.name} id={catagory.name} />
                        <span>{catagory.name}</span>
                    </label>
                )}
            </div>
            {show &&
                catagory.t_Catagorys?.map((catagory) => (
                    <TCatagory catagory={catagory} key={catagory.value} />
                ))}
        </>
    );
}
