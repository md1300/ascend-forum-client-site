
import { categoriesData } from "./categoriesData";


const Categories = () => {
    return (
        <div className=" p-10">
            <select>
                <option>category</option>
            {
                categoriesData.map((category,index)=><option value={category.label} key={index}>{category.label}</option>)
            }
            </select>
        </div>
    );
};

export default Categories;