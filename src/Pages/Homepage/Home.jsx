
import { useState } from 'react';
import Categories from '../../Components/category/categories';
import Banner from '../../Components/Homepages/Banner/Banner';
import UsersPostData from '../../Components/Homepages/Banner/usersPost/UsersPostData';

const Home = () => {
    const [postsData,setPostsData]=useState([])
    const [searchText,setSearchText]=useState([])
    const [search,setSearch]=useState([])
    


    const handleSearchSubmit=(e)=>{
        e.preventDefault()
        setSearch(searchText)
    }

    // console.log(search)
  

    
    

    return (
        <>
        <div className='flex gap-3 '>
            <div className='bg-orange-300 '>
                <Categories />
            </div>
            <div className='flex-1'>
                <Banner 
                setSearchText={setSearchText}
                searchText={searchText}
                handleSearchSubmit={handleSearchSubmit} />
            </div>
        </div>
        <div className='mt-14'>
            <UsersPostData 
            postsData={postsData}
            setPostsData={setPostsData}
            search={search}
           />
        </div>
        </>
    );
};

export default Home;