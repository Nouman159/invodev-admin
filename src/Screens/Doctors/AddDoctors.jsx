import React, { useEffect, useState } from "react";
// import bookService from "../../API/bookService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import doctorservice from "../../API/doctorService";

const AddDoctors = () => {

    const navigate = useNavigate()

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        phone_no: "",
        designation: "",
        specialization: ""

    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
        phone_no: false,
        designation: false,
        specialization: false,
    });

    const handleChange = (e) => {
        setData((d) => ({ ...d, [e.target.name]: e.target.value }));
        if (e.target.value.length > 0) {
            setErrors((prevState) => ({ ...prevState, [e.target.name]: false }));
        }
    };

    const [regex, setRegex] = useState({

        name: /.{1,50}$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password: /.{1,50}$/,
        phone_no: /.{1,50}$/,
        designation: /.{1,50}$/,
        specialization: /.{1,50}$/,

    });
    const submit = () => {
        console.log(data);
        let hasError = false;

        Object.keys(data).forEach((v) => {  // Use forEach instead of map, since map is used for returning values.
            if (!regex[v].test(data[v])) {
                setErrors((prevState) => ({ ...prevState, [v]: true }));
                hasError = true;
            }
        });

        if (hasError) {
            toast.error("Please Fill all the desired fields");
        } else {
            doctorservice.create(data).then(res => {
                navigate('/Books')
            })
        }
    };



    return (
        <div>

            <div className=" px-8 bg-[#F5F4FE] h-screen py-4">
                <div className="bg-[#FFFFFF] px-10 py-10 rounded-2xl flex flex-col items-center">
                    <h1 className={`text-[#FF6E40] font-[800] uppercase text-[25px]`}>
                        Add Doctors
                    </h1>
                    <div className="bg-gray-300 h-[1px] w-full mb-5"></div>
                    <div className="grid gap-1  w-[90%]">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="">
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    {" "}
                                    Doctor Name{" "}
                                </label>
                                <input
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={handleChange}
                                    placeholder="Enter Name"
                                />

                            </div>
                            <div>
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    Phone No
                                </label>
                                <input
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"
                                    type="text"
                                    name="phone_no"
                                    value={data.phone_no}
                                    onChange={handleChange}
                                    placeholder="Enter Phone"
                                />

                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            <div>
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    password
                                </label>
                                <input
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    placeholder="Enter Phone"
                                />

                            </div>

                            <div>
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    Email
                                </label>
                                <input
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    placeholder="Enter Phone"
                                />

                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            <div>
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    Designation
                                </label>
                                <input
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"
                                    type="text"
                                    name="designation"
                                    value={data.designation}
                                    onChange={handleChange}
                                    placeholder="Enter Designation"
                                />

                            </div>

                            <div>
                                <label className="text-black ml-1 font-semibold text-[14px]">
                                    Specialization
                                </label>
                                <input
                                    className="w-full text-[15px] py-2 px-3 border-[1px] border-gray-200 rounded-md focus:outline-none focus:ring-[1px] focus:ring-gray-400 focus:shadow-md focus:border-transparent"
                                    type="text"
                                    name="specialization"
                                    value={data.specialization}
                                    onChange={handleChange}
                                    placeholder="Enter Specialization"
                                />

                            </div>
                        </div>

                        <div className="flex justify-center mt-5">
                            <button
                                className="text-white bg-[#FF6E40] hover:shadow-lg duration-300  hover:shadow-gray-400 rounded-xl px-10 py-2"
                                onClick={() => submit()}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddDoctors