import {AiOutlineEye} from 'react-icons/ai';
import {BsPencil, BsTrash} from 'react-icons/bs';

const List = ({items, setItems, type, setType}) => {
  return (
    <div className="md:px-4 md:pb-12 md:pt-4 min-h-[80vh] ">
      <div className="p-2 md:p-5 my-6 shadow-xl bg-gray-100">
        <div className='flex flex-wrap mb-4 justify-between items-center'>
          <h1 className="md:text-xl">Your inventory</h1>

          <button className='border bg-gray-200 text-gray-800 font-semibold px-2 md:px-12 py-2 inline-block hover:bg-gray-500 hover:text-white hover:cursor-pointer'>Add item</button>

          <div>
            <select
             className='py-2 px-1'
             value={type}
             onChange={(e)=>setType(e.target.value)}
            >
              <option value="st">Select type:</option>
              <option value="All">All</option>
              <option value="Assault rifle">Assault rifle</option>
              <option value="SMG">SMG</option>
              <option value="Sniper Rifle">Sniper Rifle</option>
              <option value="Melee">Melee</option>
              <option value="Throwable">Throwable</option>
            </select>
          </div>
        </div>

        <div className="overflow-auto rounded-lg shadow hidden md:block">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Sr no.
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Image
                </th>
                <th className="p-3 w-24 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Type
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  In Inventory
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Sold
                </th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
                  Price (in ₹)
                </th>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>

            

            {items.map((item,i) => ( (type === item.type || type ==="All" || type==="st") &&
              <tbody className="divide-y divide-gray-100 ">
                <tr className="bg-white justify-center">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {i + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img src={item.image} alt={item.name} className="h-[6rem] rounded-full" />
                  </td>
                  <td className="p-3 text-md font-semibold text-gray-700 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.type}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <span
                      className={`p-1.5 text-xs font-medium tracking-wider text-gray-800 bg-gray-200
                        ${item.in_inventory < 10 && "text-green-800 bg-red-300"}
                        ${item.in_inventory > 20 && "text-green-800 bg-green-200"}
                         rounded-lg bg-opacity-50`}
                    >
                      {item.in_inventory}
                    </span>
                    
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.sold}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {item.price}
                  </td>
                  <td className="p-3 text-sm flex mt-9 items-center text-gray-700 whitespace-nowrap">
                        <div className="hover:cursor-pointer">
                            <AiOutlineEye className="h-4 mt-1 text-blue-600"/>
                        </div>
                        <div className="hover:cursor-pointer mx-6">
                            <BsPencil className="h-4 mt-1 text-blue-400" />
                        </div>
                        <div className="hover:cursor-pointer">
                            <BsTrash className="h-4 mt-1 text-red-600"/>
                        </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          {/* {buisnessDetails.jobsAdded.length===0?<div className="text-center my-4">You have not yet posted any Job</div>:<></>} */}
        </div>

        <div className="flex flex-col w-full md:hidden">
          {items.map((item,i)=> ( (type === item.type || type ==="All" || type==="st") &&
            <div className="bg-white space-y-3 p-4 my-2 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <img src={item.image} alt={item.name} className="h-[4rem] sm:h-[6rem] rounded-full" />
                <div className="flex flex-col text-left w-[60%] text-sm">
                    <div className="text-sm text-left font-medium text-black">
                    {item.name}
                    </div>
                    <div className="text-gray-500 text-left ">
                    {"Item type: "}{item.type}
                    </div>
                    <div className="text-gray-500 text-left ">
                    {"Total sold: "}{item.sold}
                    </div>
                </div>
              </div>
              <div className="flex h-7 justify-between items-center">
                <span
                  className={`p-1.5 text-xs font-medium tracking-wider text-gray-800 bg-gray-200 
                  ${item.in_inventory < 10 &&"text-green-800 bg-red-100"}
                  ${item.in_inventory > 20 && "text-green-800 bg-green-200"}
                  rounded-lg bg-opacity-50`}
                >
                  {"In inventory: "}{item.in_inventory}
                </span>
                <div className="p-3 text-sm flex justify-between text-gray-700 whitespace-nowrap">
                    <div className="hover:cursor-pointer">
                        <AiOutlineEye className="h-4 mt-1 text-blue-600"/>
                    </div>
                    <div className="hover:cursor-pointer  mx-4">
                        <BsPencil className="h-4 mt-1 text-blue-400" />
                    </div>
                    <div className="hover:cursor-pointer">
                        <BsTrash className="h-4 mt-1 text-red-600"/>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default List