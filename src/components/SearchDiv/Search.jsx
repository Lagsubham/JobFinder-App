import React from "react";
import {AiOutlineSearch} from 'react-icons/ai';
import { AiOutlineCloseCircle } from "react-icons/ai";
import {BsHouseDoor} from "react-icons/bs";
import {CiLocationOn} from "react-icons/ci"

const Search= () => {
    return (
    <div className="grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]">
        <form action="">
            <div className="flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-Ig shadow-greyIsh-700">
                <div className="flex gap-2 items-center">
                  <AiOutlineSearch className="text-[25px] icon"/>
                  <input  placeholder='Search Job Here...'type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%] " />
                  <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
                </div>

                <div className="flex gap-2 items-center">
                  <BsHouseDoor className="text-[25px] icon"/>
                  <input  placeholder='Search by Company...'type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%] " />
                  <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
                </div>

                <div className="flex gap-2 items-center">
                  <CiLocationOn className="text-[25px] icon"/>
                  <input  placeholder='Search by location...'type="text" className="bg-transparent text-blue-500 focus:outline-none w-[100%] " />
                  <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"/>
                </div>

                <button preventfefault  className="bg-[#2a68ff] h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">Search</button>
            </div>
        </form>
        
        <div className="flex  items-center gap-10 justify-center">
            <div className="flex items-center gap-2">
                <label htmlFor="relevance" className="text-[#808080] font-semibold">sort by:</label>
                <select id="relevance" name="" className="bg-white rounded-[3px] px-4 py-1">
                    <option value="">Relevance</option>
                    <option value="">Inclusive</option>
                    <option value="">Starts With</option>
                    <option value="">contains</option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                <label htmlFor="type" className="text-[#808080] font-semibold">Type:</label>
                <select id="relevance" name="" className="bg-white rounded-[3px] px-4 py-1">
                    <option value="">Full-time</option>
                    <option value="">Remote</option>
                    <option value="">Contract</option>
                    <option value="">Part-time</option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                <label htmlFor="level" className="text-[#808080] font-semibold">LEVEL:</label>
                <select id="level" name="" className="bg-white rounded-[3px] px-4 py-1">
                    <option value="">Senior</option>
                    <option value="">Begineer</option>
                    <option value="">Intermediate</option>
                    <option value="">Advocate</option>
                </select>
            </div>

            <span className="text-[#alalal]">Clear All</span>

        </div>

    </div>
    )
}

export default Search;