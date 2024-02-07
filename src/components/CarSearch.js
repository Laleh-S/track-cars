import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

// In here whenever a user types in the search input, for example if they typed in Subaru, we're going to try to find all the cars that have 
// then name Subaru.
function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    }); 

    const handleChangeSearchTerm = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    };

    return (
        <div className="list-header">
            <h3 className="tiste is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="lablel"></label>
                <input className="input" value={searchTerm} onChange={handleChangeSearchTerm}/>
            </div>
        </div>
    );
};

export default CarSearch;