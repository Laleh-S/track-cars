//* Note:
// wherever we dispatch an action, we need to provide a payload because every single one of our reducers are always expecting
// a payload along with it.

import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: 'form',
    // our initialState would be an obj, because form slice is going to keep track of 'name' and 'cost'.
    initialState: {
        name: '',
        cost: 0,
    },
    reducers: {
        // When updating our "state" here, We dispatch an action with a payload property. This would be the new search term.
        changeName(state, action) {
            state.name = action.payload 
        },
        changeCost(state, action) {
            state.cost = action.payload
        }
    }
});

export const formReducer  = formSlice.reducer; // No 'S' after reducer, because it is the one single combined reducer.
export const { changeName, changeCost } = formSlice.actions;




