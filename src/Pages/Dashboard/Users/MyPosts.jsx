import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import MyPostTable from "../../../Components/Dashboard/Tables/MyPostTable/MyPostTable";


const MyPosts = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()


    const { data: posts, isLoading, } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const { data } = await axiosPublic(`/posts/${user?.email}`)
            // console.log(data)
            return data
        }
    })

    console.log(posts)

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table ">
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
                    <tbody>
                        {
                            posts.map((post, index) => <tr key={index}>
                                <th>{index+1}</th>
                                <td>{post.post_Title}</td>
                                <td>{post.totalCount}</td>
                                <td  >comments</td>
                                <td >delete</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>


        </>
    );
};

export default MyPosts;