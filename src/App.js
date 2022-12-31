/* eslint-disable no-shadow */
import { useState } from 'react';
import './App.css';
import Items from './components/items/Items';
import Users from './components/Users/Users';

function App() {
    const [showEditItems, setShowEditItems] = useState(false);

    return (
        <>
            <Users setShowEditItems={setShowEditItems} />
            {showEditItems && <Items setShowEditItems={setShowEditItems} />}
        </>
    );
}

export default App;
