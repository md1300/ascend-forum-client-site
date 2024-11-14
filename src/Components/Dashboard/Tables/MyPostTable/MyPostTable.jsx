
import {Link} from 'react-router-dom'

const MyPostTable = ({index,postData}) => {
  


    return (
       <>
    <tbody>
       <tr >
        <th>{index+1}</th>
        <td>{postData.post_Title}</td>
        <td>{postData.totalCount}</td>
        <td className="hover:bg-gray-300"><Link to={`/comments/${postData._id}`}>Comment</Link></td>
        <td className="hover:bg-gray-300"><button>Delete</button></td>
      </tr>    
    </tbody>
   
    </>
    );
};

export default MyPostTable;