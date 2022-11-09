import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}

const sumItems = (items) => {
    const itemCounter = items.reduce((total, product) => total + product.quantity, 0)
    const total = items.reduce((total, product) => total + product.quantity * product.price, 0)
    return { total, itemCounter }
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(state.selectedItems)
            }
        case "INCREASE":
            state.selectedItems.map(item => item.id === action.payload.id && item.quantity++)
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            state.selectedItems.map(item => item.id === action.payload.id && item.quantity--)
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true
            }
    }
}
export const cartContext = createContext()

const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)



    return (
        <cartContext.Provider value={{ state, dispatch }}>
            {props.children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;