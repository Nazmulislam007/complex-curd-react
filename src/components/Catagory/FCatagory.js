import React, { useState } from 'react';
import { useItems } from '../../context/ItemProvider';
import './Catagory.css';
import SCatagory from './SCatagory';

export default function FCatagory({ catagory, item }) {
    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(true);
    const { addSelectedData, removeSelectedData } = useItems();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSelected(() => !selected);

        if (selected) {
            addSelectedData({
                name: item?.name,
                value: item?.value,
                f_catagory: { name, value },
            });
        } else {
            removeSelectedData({
                f_catagory: { value },
            });
        }
    };

    return (
        <>
            <div className="f-cata">
                {catagory?.s_Catagorys ? (
                    <div onClick={() => setShow(!show)}>{catagory.name}</div>
                ) : (
                    <label htmlFor={catagory.name}>
                        <input
                            type="checkbox"
                            name={catagory.name}
                            id={catagory.name}
                            value={catagory.value}
                            onChange={handleChange}
                        />
                        <span>{catagory.name}</span>
                    </label>
                )}
            </div>
            {show &&
                catagory.s_Catagorys?.map((catagory) => (
                    <SCatagory catagory={catagory} key={catagory.value} />
                ))}
        </>
    );
}
