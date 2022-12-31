import React from 'react';
import Companies from './Company/Companies';
import './Users.css';

export default function Users({ setShowEditItems }) {
    return (
        <div className="users_container">
            <header className="container-header">
                <h2 className="header-text">Select your company</h2>
                <div className="add-icon" onClick={() => setShowEditItems(true)}>
                    <i className="fa-solid fa-plus" />
                </div>
            </header>
            <div className="user">
                <header className="user-header">
                    <h2 className="user-name">Nazmul Islam</h2>
                    <div className="action-icons">
                        <div>
                            <i className="fa-solid fa-pen-to-square" />
                        </div>
                        <div>
                            <i className="fa-solid fa-trash" />
                        </div>
                    </div>
                </header>
                <Companies />
            </div>
        </div>
    );
}
