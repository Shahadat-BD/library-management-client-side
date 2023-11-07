

function BorrowedTable({borrowed,handleReturnButton}) {
    const {bookImage,bookName,category,borrowedDate,returnDate,_id} = borrowed
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask rounded-md  h-20">
                <img  src={bookImage} alt="service image" />
              </div>
            </div>
          </div>
        </td>
        <td>
            <div>
                <div className="font-bold   dark:text-white "> {bookName}</div>
            </div> 
        </td>
        <td className=" dark:text-white ">{borrowedDate}</td>
        <td className="  dark:text-white">{category}</td>
        <td className="  dark:text-white">{returnDate}</td>
        <th>
          <button onClick={()=>handleReturnButton(_id,category)} className="text-white bg-pink-500 px-4 py-1 rounded-md">Return</button>
        </th>
      </tr>
    )
}

export default BorrowedTable
