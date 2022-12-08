import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from "../../Redux/dressesSlice";

const Filter = ({category}) => {
const selectedCategory =useSelector(getSelectedCategory);
const dispatch = useDispatch();

    return (
        <div className="filters">
            {['floral', 'abstract', 'all'].map(category =>
                <div key={category.toString()}>
                    <button onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton' }>{category}</button>
                </div>
            )
        }
        </div>
    )
}

export default Filter;
