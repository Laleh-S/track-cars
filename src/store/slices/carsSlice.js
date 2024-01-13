//* nanoid:
// Is a rudux tool that generates random general ids

//* Note:
// wherever we dispatch an action, we need to provide a payload because every single one of our reducers are always expecting
// a payload along with it.

import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: [], // Would be an array of objects
    },
    reducers: {
        // When updating our "state" here, We dispatch an action with a payload property. This would be the new search term.
        changesearchTerm(state, action) {
            state.searchTerm = action.payload 
        },
        addCar(state, action) {
            // Assumption: whenever we call 'addCar', it will contain a payload property with 'name' and 'cost' of the car we adding.
            state.cars.push({  // pushing a new car object to the cars array. 
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeCar(state, action) {
            // Assumption: whenever we call 'removeCar', it will contain a payload property the 'id' of the car we are removing.
            const updated = state.cars.filter((car) => {
                return car.id !== action.payload
            });
            state.cars = updated;
        },
    },
});

export const carsReducer  = carsSlice.reducer;
export const { changesearchTerm, addCar, removeCar } = carsSlice.actions;


