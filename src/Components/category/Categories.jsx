
import { Link } from "react-router-dom";
import { categoriesData } from "./categoriesData";


const Categories = () => {
    return (
        <div className="flex flex-col gap-3 p-10">
            {
                categoriesData.map((category,index)=><Link key={index}>{category}</Link>)
            }
        </div>
    );
};

export default Categories;