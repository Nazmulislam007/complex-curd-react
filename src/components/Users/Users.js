/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useItems } from '../../context/ItemProvider';
import Companies from './Company/Companies';
import './Users.css';

export default function Users({ setShowEditItems }) {
    const { fetchPosts: posts, deletePost, fetchEditItems } = useItems();

    return (
        <div className="users_container">
            <header className="container-header">
                <h2 className="header-text">Select your company</h2>
                <div className="add-icon" onClick={() => setShowEditItems(true)}>
                    <i className="fa-solid fa-plus" />
                </div>
            </header>
            {posts?.length !== 0 &&
                posts.map((post) => (
                    <div className="user" key={post.id}>
                        <header className="user-header">
                            <h2 className="user-name">{post.userName}</h2>
                            <div className="action-icons">
                                <div onClick={() => fetchEditItems(post.id)}>
                                    <i className="fa-solid fa-pen-to-square" />
                                </div>
                                <div onClick={() => deletePost(post.id)}>
                                    <i className="fa-solid fa-trash" />
                                </div>
                            </div>
                        </header>
                        <Companies selected={post.selected} />
                    </div>
                ))}
        </div>
    );
}
