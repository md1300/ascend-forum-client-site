
import Categories from '../../Components/category/categories';
import Banner from '../../Components/Homepages/Banner/Banner';
import UsersPostData from '../../Components/Homepages/Banner/usersPost/UsersPostData';

const Home = () => {
    return (
        <>
        <div className='flex gap-3 '>
            <div className='bg-orange-300 '>
                <Categories />
            </div>
            <div className='flex-1'>
                <Banner />
            </div>
        </div>
        <div className='mt-14'>
            <UsersPostData/>
        </div>
        </>
    );
};

export default Home;