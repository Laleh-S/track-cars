// to figure out what cars are currently displayed on the screen, we need to access our state, we need to get access to a list of cars, 
// we need to get access to whatever the current search term is, we need to do the same kind of filtering logic, but this time, instead 
// of returning a list of all the cars, we need to take a look at the filtered list of cars, and sum up the cost of all of them.

import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(({ cars: { data, searchTerm }} ) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        return filteredCars.reduce((acc, car) => {
            return acc + car.cost
        }, 0)
    });

    return (
        <div className="car-value">
            Total Cost: ${totalCost} 
        </div>
    )
};

export default CarValue;