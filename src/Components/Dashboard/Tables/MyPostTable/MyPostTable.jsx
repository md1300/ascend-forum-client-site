

const MyPostTable = ({post,index}) => {

    console.log({post,index})

    return (
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
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
      
    </tbody>
  </table>
</div>
    );
};

export default MyPostTable;