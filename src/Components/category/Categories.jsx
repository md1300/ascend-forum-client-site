
import { categoriesData } from "./categoriesData";


const Categories = ({ handleCatagorySort, category }) => {
    return (
        <div className=" p-10">
            <select
                onChange={(e) => { handleCatagorySort(e.target.value) }}
                name='sort'
                value={category}>
                <option>category</option>
                {
                    categoriesData.map((category, index) => <option value={category.label} key={index}>{category.label}</option>)
                }
            </select>
        </div>
    );
};

export default Categories;