import fakePostData from '../../../../fakeData/fakePostData'
import UserPostDataBox from './UserPostDataBox';

const UsersPostData = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>
            {
                fakePostData.map((postData,index)=><UserPostDataBox className='text-rose-700' key={index} postData={postData}></UserPostDataBox>)
            }
        </div>
    );
};

export default UsersPostData;