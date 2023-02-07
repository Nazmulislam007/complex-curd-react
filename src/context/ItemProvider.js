import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    // eslint-disable-next-line prettier/prettier
    useState
} from 'react';
import useGetItems from '../API/useGetItems';
import reducer from './reducer';

const ItemContext = createContext();

export const useItems = () => useContext(ItemContext);

export default function ItemProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [fetchEditedPost, setFetchEditedPost] = useState({});
    const [fetchPosts, setFetchPosts] = useState([]);
    const { items } = useGetItems() || {};

    const [state, dispatch] = useReducer(reducer, {
        items: [],
        userData: {
            userName: '',
            selected: [],
        },
    });

    const postItem = useCallback(async (data) => {
        setLoading(true);
        await fetch(`${process.env.REACT_APP_SERVER_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        setLoading(false);
    }, []);

    const deletePost = useCallback(async (id) => {
        setLoading(true);
        await fetch(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, {
            method: 'DELETE',
        });
        setLoading(false);
    }, []);

    const fetchEditItems = useCallback(async (id) => {
        const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, {
            method: 'PATCH',
        });
        const data = await res.json();
        setFetchEditedPost(data);
    }, []);

    useEffect(() => {
        const fetchPostData = async () => {
            const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/posts`);
            const data = await res.json();
            setFetchPosts(data);
        };
        fetchPostData();
    }, [loading]);

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

    const removeSelectedData = (value) => {
        dispatch({
            type: 'REMOVE_SELECTED_DATA',
            payload: value,
        });
    };

    const value = useMemo(
        () => ({
            ...state,
            dispatch,
            addSelectedData,
            fetchPosts,
            fetchEditedPost,
            removeSelectedData,
            postItem,
            deletePost,
            fetchEditItems,
        }),
        [fetchPosts, postItem, deletePost, state, fetchEditItems, fetchEditedPost]
    );

    return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}
