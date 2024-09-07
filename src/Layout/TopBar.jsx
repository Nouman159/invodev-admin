import React from 'react'

import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";


const TopBar = () => {

    return (
        <div>
            <div className=' py-5 flex flex-row bg-[#F5F4FE] justify-between gap-14 px-10'>
                <div className=' text-2xl  pl-5  text-black font-semibold'>
                    Welcome to Admin Panel
                </div>


                <div className='  flex flex-row border-2  px-[1rem] py-2 rounded-lg  w-[20rem]  focus:outline-none focus:border-black bg-white'>

                    <div>
                        <CiSearch className=' h-6 w-6' />
                    </div>
                    <input

                        name="search"
                        type="search"
                        id="search"
                        placeholder="Search by Title"
                        className=" px-[1rem]   w-[20rem] mr-auto  outline-none  " />
                </div>

                <div className=' pt-3'>
                    <IoIosNotificationsOutline className=' h-7 w-7' />
                </div>

                {/* <div>
                    <button className=' bg-[#D95E36]  text-white py-2 px-6 '>
                        + Add Agents
                    </button>
                </div> */}
            </div>

        </div>
    )
}

export default TopBar