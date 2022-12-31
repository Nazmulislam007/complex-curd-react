/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useItems } from '../../context/ItemProvider';
import Item from './Item';
import './Items.css';

export default function Items({ setShowEditItems }) {
    const [showDropDown, setShowDropDown] = useState(false);
    const { items } = useItems() || {};

    return (
        <div className="container">
            <div className="items_container">
                <div className="close-icon" onClick={() => setShowEditItems(false)}>
                    <i className="fa-solid fa-circle-xmark fa-lg" />
                </div>
                <form>
                    <label htmlFor="name">
                        <input type="text" id="name" placeholder="Input your name" />
                        <span>Full name</span>
                    </label>
                    <div className="industry-label">
                        <header onClick={() => setShowDropDown(!showDropDown)}>
                            <p>Choose industry</p>
                            <div>
                                <i className="fa-solid fa-caret-down" />
                            </div>
                        </header>
                        {showDropDown && (
                            <div className="industry">
                                <div className="items__box">
                                    {items?.map((item) => (
                                        <Item item={item} key={item.id} />
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => setShowDropDown(false)}
                                >
                                    Selected
                                </button>
                            </div>
                        )}
                    </div>
                    <div>
                        <button className="btn" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
