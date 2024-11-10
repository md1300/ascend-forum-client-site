import useRole from "../../../hook/useRole";


const MyProfile = () => {
    const [userData,isLoading]=useRole()
    if(isLoading) return <div className="flex justify-center pt-40 "><span className="loading loading-spinner text-success "></span></div>
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={userData?.image}
      alt="Shoes"
      className="w-24 rounded-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">User name : {userData?.name} </h2>
    <p> email : {userData?.email} </p>
    <p> badge : {userData?.badge} </p>   
  </div>
</div>
    );
};

export default MyProfile;