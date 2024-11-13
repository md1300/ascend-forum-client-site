import MyPostTable from "../../../Components/Dashboard/Tables/MyPostTable/MyPostTable";
import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useQuery } from '@tanstack/react-query'


const MyPosts = () => {
  const { user } = useAuth()
  const axiosPublic = useAxiosPublic()
  const { data: myPostsData = [] } = useQuery({
    queryKey: ['my-posts'],
    queryFn: async () => {
      const { data } = await axiosPublic(`/posts/${user.email}`)

      return data
    }
  })

  console.log(myPostsData)


  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>post title</th>
              <th>total vote count </th>
              <th>comment</th>
              <th>delete</th>
            </tr>
          </thead>

          {
            myPostsData.map((postData, index) => <MyPostTable key={postData._id} postData={postData} index={index} />)
          }

        </table>
      </div>
    </>
  );
};

export default MyPosts;