import { GrLike } from "react-icons/gr";
import { GrDislike } from "react-icons/gr";
import { MdInsertComment } from "react-icons/md";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const UserPostDataBox = ({postData}) => {
    const {post_Title,category,post_time,author,upVote,downVote,comment_count,_id}=postData;
    // console.log(post_Title)
    
    
    return (
        <>
        <Link to={`/post-details/${_id}`} className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex items-center justify-between">
    post_time :   <span >{post_time}</span>
        <p className="px-3 py-1 text-sm font-bold text-orange-100 transition-colors duration-300 transform bg-orange-600 rounded cursor-pointer hover:bg-gray-500" >{category}</p>
    </div>

    <div className="mt-2">
        <p href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"  >{post_Title} </p>
      
    </div>

    <div className="flex items-center justify-between mt-4">
        <div className='flex items-center justify-center gap-7'>
            <p><MdInsertComment /><br/>{comment_count} </p>
            <p> <GrLike /><br/>{upVote} </p>
            <p><GrDislike /><br/>{downVote} </p>
        </div>
        <div className="flex items-center">
            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={author?.image} alt="avatar"/>
            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"  role="link">{author?.name}</a>
        </div>
    </div>
</Link>

</>
    );
};

UserPostDataBox.propTypes={
    postData:PropTypes.object,
}

export default UserPostDataBox;