import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: '',
    age: 0,
    gender: '',
    bio: ''
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateName: (state, action) => {
            return {
                ...state,
                name: action.payload
            };
        },
        updateAge: (state, action) => {
            return {
                ...state,
                age: action.payload
            };
        },
        updateGender: (state, action) => {
            return {
                ...state,
                gender: action.payload
            };
        },
        updateBio: (state, action) => {
            return {
                ...state,
                bio: action.payload
            };
        }
    }
});

export default formSlice.reducer;

export const {updateName, updateGender, updateAge, updateBio} = formSlice.actions;