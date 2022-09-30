import { configureStore } from '@reduxjs/toolkit';
import  textReducer  from './reducers/textReducer';

export const store = configureStore({
    reducer:{
        addText: textReducer,
    }
});

