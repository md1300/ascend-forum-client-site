
import PropTypes from 'prop-types'
const UserPostDataBox = ({postData}) => {
    const {title,description,category,tags,post_time,upvote_count,downvote_count,upvote_icon,downvote_icon,views,comments_count,author}=postData;
    console.log(postData)
    
    
    return (
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex items-center justify-between">
    post_time :   <span >{post_time}</span>
        <p className="px-3 py-1 text-sm font-bold text-orange-100 transition-colors duration-300 transform bg-orange-600 rounded cursor-pointer hover:bg-gray-500" >{category}</p>
    </div>

    <div className="mt-2">
        <p href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"  >{title} </p>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
    </div>

    <div className="flex items-center justify-between mt-4">
        <div className='flex gap-2'>
            <p>comments_count : {comments_count} </p>
            <p>votes_count : </p>
        </div>
        <div className="flex items-center">
            <img className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src={author.author_image} alt="avatar"/>
            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"  role="link">{author.author_name}</a>
        </div>
    </div>
</div>
    );
};

UserPostDataBox.propTypes={
    postData:PropTypes.object,
}

export default UserPostDataBox;