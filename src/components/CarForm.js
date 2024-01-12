//! IMPORTANT: 
// This component needs to access the name piece of state which is coming from 'form selector'. So we need to import 'useselector'.

//* useSelector:
//  Is the hook that we use to get access to our state.

//* ACCESSING OUR STATE: --> Done many times per project whenever we want to access some state from inside of a component.
// 1- Find the component that needs to access some state
// 2- Import the "useSelector" hook from react-redux
// 3- Call the "useSelector" hook, passing in the selector function
// 4- Use the state! Any time state changes, the component will automatically rerender

//* Input section Notes: 
// The 'name' bellow is the name piece of state from our redux store whenever a user types inside the input. It causes the onChange
// prop to be called and inside there we dispatch an action telling the Redux store that it needs to update the name piece of state.

//* handleNameChange Notes:
// inside the event handler we call changeName() inside of dispatch. This gives us back the changeName action obj. when we
// call 'changeName' it expects to recieve a payload. whatever we put inside the changeNmae is going to be our payload. The  
// new Value that we want to assign to our name piece of state is gonna be 'event.target.value' which is what the user typed in.



import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store'; 

function CarForm() {
    const dispatch = useDispatch();
    // we call our 'useSelector', pass in our selector function that is going to recieve our big 'state' object.
    const name = useSelector((state) => {
        return state.form.name  // getting the 'name' piece of state
    })

    const handleNameChange = (event) => {  // Notes above
        dispatch(changeName(event.target.value))
    };
    
    return (
        <div className="car-form">
            <h4 className="subtitle is-3 ">Add Car</h4>
            <form>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input className="input is-expanded" 
                        value={name}  // Notes above 
                        onChange={handleNameChange}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
};

export default CarForm;