
//* nanoid:
// Is a rudux tool that generates random general ids

//* Note:
// wherever we dispatch an action, we need to provide a payload because every single one of our reducers are always expecting
// a payload along with it.


import { createSlice, nanoid } from "@reduxjs/toolkit";

// Our initial state is going to be an object, because there are two properties we want to maintain inside of our 
// carsSlice. the search term and our data.
const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: [], // Would be an array of objects
    },
    reducers: {
        // When updating our "state" here, We dispatch an action with a payload property. This would be the new search term.
        changesearchTerm(state, action) {
            state.searchTerm = action.payload 
        },
        addCar(state, action) {
            // Assumption: whenever we call 'addCar', it will contain a payload property with 'name' and 'cost' of the car we adding.
            state.data.push({  // pushing a new car object to the data array. 
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeCar(state, action) {
            // Assumption: whenever we call 'removeCar', it will contain a payload property the 'id' of the car we are removing.
            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            });
            state.data = updated;
        },
    },
});

export const carsReducer  = carsSlice.reducer;
export const { changesearchTerm, addCar, removeCar } = carsSlice.actions;


