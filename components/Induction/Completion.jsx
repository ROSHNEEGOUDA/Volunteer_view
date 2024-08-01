import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";

const Completion = ({ activeTab }) => {
    const isMobile = useMediaQuery({ maxWidth: 480 });
    return (
        <div className={`flex flex-col px-4 sm:px-6 lg:px-8 ${isMobile ? "pb-12" : ""}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`sm:mt-20 sm:mb-20 text-center sm:text-left ${isMobile ? "mt-10" : ""}`}>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-5 text-[#605383]">Congratulations,</h1>
                    <h1 className="text-xl sm:text-xl lg:text-2xl font-serif mb-5">You have done with Part 1 of</h1>
                    <h1 className="text-xl sm:text-xl lg:text-2xl font-serif overflow-wrap: break-word;">your induction journey</h1>
                </div>
            </div>

            <h1 className="text-left mt-5">Choose your Preference</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link to={`/start-induction?activeTab=${activeTab === 'part1' ? 'part2' : 'part1'}`}>
                    <div className="h-32 flex bg-[#605383] text-white rounded-xl shadow-lg p-5 m-5">
                        <div className="flex-1">
                            <h1 className={`font-serif font-medium ${isMobile ? "text-2xl" : "text-3xl"}`}>Continue Solo</h1>
                            <p className={`text-left overflow-wrap: break-word ${isMobile ? "text-sm" : ""}`}>Complete rest of the induction at your pace</p>
                        </div>
                        <img src={p1} alt="Continue Solo" className="  object-contain ml-4 h-28"/>
                    </div>
                </Link>
                <Link to="/training">
                    <div className="h-32 flex bg-[#605383] text-white rounded-xl shadow-lg p-5 m-5">
                        <div className="flex-1">
                            <h1 className={`font-serif font-medium ${isMobile ? "text-2xl" : "text-2xl"}`}>Book a Session</h1>
                            <p className={`text-center overflow-wrap: break-word ${isMobile ? "text-sm" : ""}`}>Get trained faster with trainer</p>
                        </div>
                        <img src={p2} alt="Book a Session" className=" object-contain ml-4 h-28"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Completion;
