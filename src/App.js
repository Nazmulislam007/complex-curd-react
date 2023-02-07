/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';
import './App.css';
import Items from './components/items/Items';
import Users from './components/Users/Users';
import { useItems } from './context/ItemProvider';

function App() {
    const { fetchEditedPost } = useItems() || {};
    const [showEditItems, setShowEditItems] = useState(false);

    useEffect(() => {
        if (fetchEditedPost.id) return setShowEditItems(true);
        return setShowEditItems(false);
    }, [fetchEditedPost]);

    return (
        <>
            <Users setShowEditItems={setShowEditItems} />
            {showEditItems && <Items setShowEditItems={setShowEditItems} />}
        </>
    );
}

export default App;
