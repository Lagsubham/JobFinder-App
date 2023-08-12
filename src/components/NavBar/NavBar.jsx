import React from "react";

const NavBar= () => {
    return (
        <div className="flex justify-between items-center p-[3rem]">
            <div>
                <h1 className="text-[25px] text-[#2a68ff]"><strong>Job</strong>Search</h1>
            </div>

            <div className="flex gap-8" >
                  <li className="text-[#6f6f6f] hover:text-[#2a68ff]">jobs</li>
                  <li className="text-[#6f6f6f] hover:text-[#2a68ff]">Companies</li>
                  <li className="text-[#6f6f6f] hover:text-[#2a68ff]">About</li>
                  <li className="text-[#6f6f6f] hover:text-[#2a68ff]">Contact</li>
                  <li className="text-[#6f6f6f] hover:text-[#2a68ff]">Blog</li>
                  <li className="text-[#6f6f6f] hover:text-[#2a68ff]">Login</li>
                  <li className="text-[#6f6f6f] hover:text-[#2a68ff]">Register</li>
            </div>
        </div>
    )
}

export default NavBar;