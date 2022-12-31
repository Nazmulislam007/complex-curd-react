const reducer = (state, action) => {
    switch (action.type) {
        case 'STORE_ITEMS':
            return { ...state, items: action.payload };
        case 'ADD_SELECTED_DATA': {
            const existingItem = state.userData.selected.find(
                (select) => select.value === action.payload.value
            );

            const othersItem = state.userData.selected.filter(
                (select) => select.value !== action.payload.value
            );

            const addItem = () => {
                if (existingItem?.value === action.payload.value)
                    return [
                        ...othersItem,
                        {
                            ...existingItem,
                            f_catagory: [...existingItem.f_catagory, action.payload.f_catagory],
                        },
                    ];

                return [
                    ...state.userData.selected,
                    {
                        name: action.payload.name,
                        value: action.payload.value,
                        f_catagory: [action.payload.f_catagory],
                    },
                ];
            };

            return {
                ...state,
                userData: {
                    ...state.userData,
                    selected: addItem(),
                },
            };
        }
        default:
            return state;
    }
};

export default reducer;
