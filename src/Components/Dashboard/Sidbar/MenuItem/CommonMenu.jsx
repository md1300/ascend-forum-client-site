import MenuItem from "./MenuItem";
import { FcStatistics } from "react-icons/fc";


const CommonMenu = () => {
    return (
        <div>
            <MenuItem address='/dashboard' label='Statistic' icon={FcStatistics }/>
            
        </div>
    );
};

export default CommonMenu;