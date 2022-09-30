import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TextStateProps{
    name:string;
}

const INITIAL_STATE: TextStateProps[] = [
    {name: ''}
]

const textReducer = createSlice({
    name: "textReducer",
    initialState: INITIAL_STATE,
    reducers: {
        addText(state, {payload}: PayloadAction<string>){
            return[...state, {name: payload}];
        }
    }
});


export default textReducer.reducer;
export const { addText } = textReducer.actions;

export const useTextReducer = (state:any) => {
    return state.addText as TextStateProps[];
}