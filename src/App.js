//* Redux store Design
// 1- Identify what state we need to create in the app
// 2- Identify how that state changes over time
// 3- Group together common pieces of state 
// 4- Create a slice for each group

//* Drived state
// Values that we can calculate using some existing state that we have already defined. So it is the idea of some data that we could store 
// at state. But more efficiently, we could just calculate it by making use of some state values that we already are maintaining.

import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

function App() {

    return (
        <div className="container is-fluid">
            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    )
};
export default App;