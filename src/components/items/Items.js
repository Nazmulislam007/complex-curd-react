/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useItems } from '../../context/ItemProvider';
import Item from './Item';
import './Items.css';

export default function Items({ setShowEditItems }) {
    const [showDropDown, setShowDropDown] = useState(false);
    const [userName, setUserName] = useState('');
    const { items, userData, dispatch, postItem, fetchEditedPost } = useItems() || {};

    useEffect(() => {
        if (fetchEditedPost) {
            setUserName(fetchEditedPost.userName);
        }
    }, [fetchEditedPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        postItem({
            ...userData,
            id: Date.now(),
            userName: userName.charAt(0).toUpperCase() + userName.slice(1),
        });

        dispatch({
            type: 'CLEAR_SUBMIT_DATA',
        });
        setShowEditItems(false);
    };

    return (
        <div className="container">
            <div className="items_container">
                <div className="close-icon" onClick={() => setShowEditItems(false)}>
                    <i className="fa-solid fa-circle-xmark fa-lg" />
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <input
                            type="text"
                            id="name"
                            value={userName}
                            placeholder="Input your name"
                            onChange={(e) => setUserName(e.target.value)}
                        />
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
