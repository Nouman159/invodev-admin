import React, { useState } from "react";
import { FaHeadset } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";




const panel = [
    { name: "Dashboard", path: "/Dashboard", icon: <FaHeadset />, sub: false },

    // {
    //     name: "Roles ", path: "/", icon: <FaRegBuilding />, sub: true, items: [
    //         { name: "Dialer ", path: "/", icon: <FaRegBuilding />, sub: false },
    //         { name: "Data Entry ", path: "/Dashboard", icon: <FaRegBuilding />, sub: false },
    //         { name: "Supervisor", path: "/Dashboard", icon: <FaRegBuilding />, sub: false }
    //     ]
    // },
    { name: "Books ", path: "/Books", icon: <AiOutlineFundProjectionScreen />, sub: false },
    // { name: "Department ", path: "/Department", icon: <FaBuilding />, sub: false },
    // { name: "Roles ", path: "/Roles", icon: <FaUsers />, sub: false },
    // { name: "Shifts ", path: "/Shifts", icon: <FaUserShield />, sub: false },
    // { name: "Users ", path: "/Users", icon: <FaUserShield />, sub: false },
    // { name: "Schedule ", path: "/Schedule", icon: <GrSchedule />, sub: false },
    // { name: "Attendance ", path: "/Attendance", icon: <FaCalendarCheck />, sub: false },

]

const sidePanel = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex flex-col w-[300px] h-screen overflow-y-auto items-center bg-[#F5F4FE] text-black overflow-auto no-scrollbar '>

                <div className='flex justify-center py-2 px-6 mt-5 bg-[#F46C64] text-white rounded-2xl shadow-md'>
                    <div className=' mr-2'>
                        <IoBookSharp className=' h-7 w-6' />
                    </div>
                    <div className='text-center text-[20px] font-extrabold'>
                        Books Admin
                    </div>
                </div>

                {/* <div className='flex flex-row items-center w-[90%] bg-[#FFFFFF] py-3 rounded-xl mt-10 mb-4 px-5 shadow-sm'>
                    <div className=' mr-5'>
                        <img src='./Assets/rmbm.jpeg' alt='nhi hy bhai ' className=' rounded-full h-12 w-12 ' />
                    </div>
                    <div className=' flex flex-col '>
                        <div className='text-[16px] text-[#F46C64] font-bold'> Rana Bilal Mustafa </div>
                        <div className='text-[12px] text-[#B6BBBF]'>  Sales Manager </div>
                    </div>
                </div> */}

                {panel.map((item, index) => (
                    <div key={index} className='mt-2 text-black w-[75%] mt-5'
                        onClick={() => {
                            if (!item.sub) {
                                if (location.pathname !== item.path) {
                                    navigate(item.path);
                                }
                            } else {
                                setExpandedIndex(expandedIndex === index ? null : index);
                            }
                        }}>
                        <div
                            className={`py-[8px] cursor-pointer flex items-center pl-6   
                            ${location.pathname === item.path
                                    ? "bg-[#F6E0E2] text-[#FD8562] rounded-full border-l-4 border-r-4 border-[#FF6E40] font-semibold"
                                    : "bg-[#F5F4FE] hover:text-[#F46C64] hover:cursor-pointer border-l-4 border-r-4 border-transparent"
                                }`}>
                            <div className={`mr-3 ${location.pathname === item.path ? "bg-white rounded-full p-2" : "p-2"}`}>
                                {React.cloneElement(item.icon, { className: ' h-4 w-4' })}
                            </div>
                            <div className=' text-1xl '>
                                {item.name}
                            </div>
                        </div>
                        {expandedIndex === index && item.items && (
                            <div className="flex flex-col ml-8">
                                {item.items.map((subItem, subIndex) => (
                                    <div key={subIndex}
                                        className={`py-[8px] cursor-pointer flex items-center pl-6   
                                    ${location.pathname === subItem.path
                                                ? "bg-[#F6E0E2] text-[#FD8562] rounded-full border-l-4 border-r-4 border-[#FF6E40] font-semibold"
                                                : "bg-[#F5F4FE] hover:text-[#F46C64] hover:cursor-pointer border-l-4 border-r-4 border-transparent"
                                            }`}
                                        onClick={() => {
                                            if (location.pathname !== subItem.path) {
                                                navigate(subItem.path);
                                            }
                                        }}>
                                        <div className={`mr-3 ${location.pathname === subItem.path ? "bg-white rounded-full p-2" : "p-2"}`}>
                                            {React.cloneElement(subItem.icon, { className: ' h-4 w-4' })}
                                        </div>
                                        <div className=' text-1xl '>
                                            {subItem.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default sidePanel