import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import GetItems from '../API/GetItems';
import reducer from './reducer';

const ItemContext = createContext();

export const useItems = () => useContext(ItemContext);

export default function ItemProvider({ children }) {
    const { items } = GetItems() || {};

    // {name: "manufacture", value: 1, catagory: [{ name: "food", value: 2, }]}

    const [state, dispatch] = useReducer(reducer, {
        items: [],
        userData: {
            userName: '',
            selected: [],
        },
    });

    useEffect(() => {
        dispatch({
            type: 'STORE_ITEMS',
            payload: items,
        });
    }, [items]);

    const addSelectedData = (data) => {
        dispatch({
            type: 'ADD_SELECTED_DATA',
            payload: data,
        });
    };

    const value = useMemo(() => ({ ...state, addSelectedData }), [state]);

    return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}
