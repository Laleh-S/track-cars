//! Note:
// In this component, we want to get access to the list of cars coming from the Redux store, iterate over them and print out 
// some information about every single car.

import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";


function CarList() {
    const dispatch = useDispatch();
    const cars = useSelector((state) => {
        return state.cars.data;
    });
    
    const handleCarDelete = (car) => { // This is the car taht we want to delete.
        dispatch(removeCar(car.id))
    };

    const renderedCars = cars.map((car) => {
        return (
            <div key={car.id} className="panel">
                <p> 
                    {/* NOT a template string, simply displaying a dash, dollar sign, and then the cost of the car.*/}
                    {car.name} - ${car.cost} 
                </p>
                <button 
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)} // This is the car that we are currently iterating over.
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
};

export default CarList;