import { useState } from 'react';

const initialState = {
    cart:[],
}

const useInitialState = () => {

	const [ state, setState ] = useState(initialState);
	
	const addToCart = (payLoad) => {
        setState({
            ...state,
            cart:[...state.cart, payLoad],
        });
    }
    
    return {
        state,
        addToCart
    };
}

export default useInitialState;