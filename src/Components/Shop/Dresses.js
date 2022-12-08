import data from "./data";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Redux/dressesSlice"; 
import Dress from "./Dress";

const Dresses = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
    <div className="cards-container">
        {data.filter(dress => {
            if (selectedCategory === 'all') return true;
            return selectedCategory === dress.category;
        })
        .map(dress => <Dress key={dress.id} dress={dress} />)}
    </div>
    )
}

export default Dresses;