import {useCallback, useEffect, useReducer} from 'react';
import axios from 'axios';
import { urlBase } from './../constants/index';
import { productsReducer, initialState } from './../reducers/products'; 
import { productsAction } from './../actions/products';

export const useGet = (endpoint) =>{

    const [state, dispatch] = useReducer(productsReducer, initialState);

    const getInfo = useCallback(async() => {
        try {
            const { data }  = await axios.get(`${urlBase}/${endpoint}`);
            dispatch({type: productsAction.SET_PRODUCT, payload: data});
            
        } catch (error) {
            console.error(error);
            dispatch({type: productsAction.SET_ERROR});
        }
    } , [endpoint] );

    useEffect(()=>{
        getInfo();
    }, [endpoint, getInfo]);
    
    return state;  
}

