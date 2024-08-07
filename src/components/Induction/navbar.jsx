import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo (2).png"
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const isMobile = useMediaQuery({maxWidth : 480})
    return (
        <nav className="flex justify-between items-center h-16 px-4 py-2 bg-orange-50">
            <div className="flex items-center">
                <Link to="cyberpeace.org" className="text-xl font-bold text-black">
                    <img src={Logo} alt="Company Logo" className={`h-16 ${isMobile ? "w-24" : ""}`} />
                </Link>
            </div>
            <div className="flex items-center ml-1">
                <Link to="/aboutInd" className={`text-black font-sans  ${isMobile ? "mr-2 text-md" : "mr-9"}`}>Induction</Link>
                <Link to="/logout" className={`text-black font-sans  ${isMobile ? "mr-1 text-md ml-1" : "mr-8"}`}>Log out</Link>
            </div>
            
        </nav>
    );
}

export default Navbar;
