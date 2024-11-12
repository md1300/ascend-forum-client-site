
import { useState } from 'react';
import Categories from '../../Components/category/categories';
import Banner from '../../Components/Homepages/Banner/Banner';
import UsersPostData from '../../Components/Homepages/Banner/usersPost/UsersPostData';

const Home = () => {
    const [postsData,setPostsData]=useState([])
    const [searchText,setSearchText]=useState([])
    const [search,setSearch]=useState([])
    const [category,setCategory]=useState([])
    // ------------------------------------------------------
    const [currentPage,setCurrentPage]=useState(1)
    const [itemsPerPage,setItemsPerPage]=useState(5)
    const [countPage,setCountPage]=useState(0)
    // -------------------------------------------------------
    
    const handleSearchSubmit=async(e)=>{
        e.preventDefault()
        try{
            setSearch(searchText)
            setCurrentPage(1)
            setCategory('')
        }
        catch(error){
                  console.log(error.message)
        }       
    }
    // -----------------------------
    const handleCatagorySort=async(value)=>{
        try{
            setCategory(value)
            setCurrentPage(1)
            setSearch('')
        }
        catch(error){
            console.log(error)
        }
    }
    
    // console.log(category)  

    return (
        <>
        <div className='flex gap-3 '>
            <div className='bg-orange-300 '>
                <Categories 
                handleCatagorySort={handleCatagorySort}
                category={category} />
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
            category={category}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            countPage={countPage}
            setCountPage={setCountPage}
           />
        </div>
        </>
    );
};

export default Home;