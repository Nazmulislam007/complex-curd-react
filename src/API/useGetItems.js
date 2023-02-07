import { useEffect, useState } from 'react';

export default function useGetItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:4000/items');
            const data = await res.json();
            setItems(data);
        };
        fetchData();
    }, []);

    return { items };
}
