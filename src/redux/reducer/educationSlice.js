import {createSlice} from "@reduxjs/toolkit";

const initState = {
    collegeName: 'hi',
    branch: '',
    from: 0,
    to: 0
}

const educationSlice = createSlice({
    name: 'education',
    initialState: initState,
    reducers: {
        updateCollegeName: (state, action) => {
            return {
                ...state,
                collegeName: action.payload
            }
        },
        updateBranch: (state, action) => {
            return {
                ...state,
                branch: action.payload
            }
        },
        updateFrom: (state, action) => {
            return {
                ...state,
                from: action.payload
            }
        },
        updateTo: (state, action) => {
            return {
                ...state,
                to: action.payload
            }
        },
    }
});

export default educationSlice.reducer;

export const {updateBranch, updateCollegeName, updateFrom, updateTo} = educationSlice.actions;