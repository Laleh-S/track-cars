//* CHANGING OUR STATE: --> Done may times per project whenever we want to update our state:
// 1- Add a reducer to one of our slices that changes state in some particular way
// 2- Export the action creator that the slice automatically creates
// 3- Find the component that you want to dispatch from
// 4- Import the action creator function and ”useDispatch” from react-redux
// 5- Call the ”useDispatch” hook to get access to the dispatch function
// 6- Whenever the user does something like running an event handler, call the action creator to get an action, then dispatch it.

//* +++ IMPORTANT NOTE about STATE +++:
// Whenever we refer to state inside of our slice, it means the state that this slice is in control of which in movieSlice
// is the array of movies and in songSlice is he array of songs.
// Everywhere else outside of our slice "state" refers to all the states within the entire Redux store.


import { configureStore } from '@reduxjs/toolkit';
import { carsReducer, changeSearchTerm, addCar, removeCar } from './slices/carsSlice';
import { formReducer, changeName, changeCost } from './slices/formSlice';


const store = configureStore({
    // The obj inside the reducer is important as it is dictating what the general shape of our state looks like inside the store.
    reducer: {
        cars: carsReducer,
        form: formReducer,
    },
    });

    export { store, changeSearchTerm, addCar, removeCar, changeName, changeCost };