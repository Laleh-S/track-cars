
//* Note:
// Whenever we try to change the name or cost, we need to know what the new name and new cost is gonna be. We're going to assume 
// that the 'action.payload' property is gonna tell us what the new name and the new cost is going to be. that means that whenever 
// we are going to update our name or our cost piece of state, We have to remember if we want to update our name or the cost, we 
// need to dispatch an action that has a payload property. so wherever we dispatch an action, we need to provide a payload because every single one of our reducers are always expecting
// a payload along with it.


import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";


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
    },
    extraReducers(builder) {
        // won't be needing action in thid case.
        builder.addCase(addCar, (state, action) => {
            state.name = '';
            state.cost = 0
        });
    }
});

export const formReducer  = formSlice.reducer; // No 'S' after reducer, because it is the one single combined reducer.
export const { changeName, changeCost } = formSlice.actions;




