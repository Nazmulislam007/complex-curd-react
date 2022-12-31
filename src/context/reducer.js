const reducer = (state, action) => {
    switch (action.type) {
        case 'STORE_ITEMS':
            return { ...state, items: action.payload };
        case 'ADD_SELECTED_DATA': {
            const Fcatagory = state.userData.selected.map((select) => {
                if (select.name === action.payload.name) {
                    return {
                        f_catagory: [...select.f_catagory, action.payload.f_catagory],
                    };
                }
                return {
                    name: action.payload.name,
                    value: action.payload.value,
                    f_catagory: action.payload.f_catagory,
                };
            });

            return {
                ...state,
                userData: {
                    ...state.userData,
                    selected: [...state.userData.selected, Fcatagory],
                },
            };
        }
        default:
            return state;
    }
};

export default reducer;
