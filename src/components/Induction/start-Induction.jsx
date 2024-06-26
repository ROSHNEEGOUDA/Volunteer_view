import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import Completion from "./Completion";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Start_Induction = () => {
    const [activeTab, setActiveTab] = useState("part1");
    const isMobile = useMediaQuery({maxWidth : 480});

    React.useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tab = searchParams.get('activeTab');
        if (tab) {
            setActiveTab(tab);
        }
    }, [location]);

    const DesktopView = ()=>{
        return(
            <div className="px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-40 gap-4 md:gap-8">
                <div className="mt-7 md:mt-7 md:ml-20 col-span-1">
                    <h1 className="text-4xl font-serif font-medium mb-3">Induction Program</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <div className="mt-10 h-10 w-52 p-1 shadow-lg">
                        <Link to="/induction_complete">
                            <h1 className="text-lg">All Chapters Completed</h1>
                            <div className="w-48 h-0.5 bg-blue-400"></div>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 flex justify-around items-center mt-7 md:mt-0 space-x-4 md:space-x-8">
                    <div className="w-32 h-32 bg-slate-300 flex flex-col items-center justify-center text-center rounded-lg">
                        <h1 className="text-3xl">08</h1>
                        <h2>Chapters</h2>
                    </div>
                    <div className="w-32 h-32 bg-slate-300 flex flex-col items-center justify-center text-center rounded-lg">
                        <h1 className="text-3xl">01</h1>
                        <span>Certificate</span>
                    </div>
                    <div className="w-32 h-32 bg-slate-300 flex flex-col items-center justify-center text-center rounded-lg">
                        <h1 className="text-3xl">10</h1>
                        <h3>hrs</h3>
                        <span>Duration</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-4 md:gap-8">
                <div className="ml-0 md:ml-20 mt-10 col-span-1">
                    <div>
                        <h1 className="text-xl mb-4">Course Overview</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, ipsam!</p>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-xl mb-4">What you'll learn</h1>
                        <ul className="ml-7 list-disc">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-xl mb-4">Test</h1>
                        <ul className="ml-7 list-disc">
                            <li>10 quick test</li>
                            <li>1 final assignment</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <div className="flex mt-16 ml-0 overflow-x-auto">
                <span
                    className={`cursor-pointer py-2 text-2xl ${activeTab === "part1" ? "border-b-2 border-blue-500" : ""
                        } mr-4`}
                    onClick={() => setActiveTab("part1")}
                >
                    Part 1
                </span>
                <span
                    className={`cursor-pointer py-2 text-2xl ${activeTab === "part2" ? "border-b-2 border-blue-500" : ""
                        }`}
                    onClick={() => setActiveTab("part2")}
                    style={{ marginLeft: "1rem" }} // Add margin-left
                >
                    Part 2
                </span>
            </div>

            {/* Content based on selected tab */}
            <div className="mt-10 mb-6">
                {activeTab === "part1" && (
                    <div>
                        <div className="grid grid-cols-1 gap-4">
                            {/* Video List */}
                            <Link to="/chapter01">
                                <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                    <div className="flex items-center"> {/* Flex container */}
                                        <div className="w-20 h-20 bg-blue-200 mr-4"></div> {/* Square div */}
                                        <div>
                                            <h3 className="text-lg font-semibold">Chapter 1</h3>
                                            <p className="text-sm">Introduction to React</p>
                                        </div>
                                    </div>

                                    <div className="text-gray-600 mr-5">
                                        <FontAwesomeIcon icon={faVideo} />
                                    </div>
                                </div>
                            </Link>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-20 h-20 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-lg font-semibold">Chapter 1</h3>
                                        <p className="text-sm">Introduction to React</p>
                                    </div>
                                </div>

                                <div className="text-gray-600 mr-5">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-20 h-20 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-lg font-semibold">Chapter 1</h3>
                                        <p className="text-sm">Introduction to React</p>
                                    </div>
                                </div>

                                <div className="text-gray-600 mr-5">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-20 h-20 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-lg font-semibold">Chapter 2</h3>
                                        <p className="text-sm">State Management in React</p>
                                    </div>
                                </div>
                                <div className="text-gray-600 mr-5">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>
                            {/* Add more video items as needed */}
                        </div>
                    </div>
                )}
                {activeTab === "part2" && (
                    <div>
                        <div className="grid grid-cols-1 gap-4">
                            {/* Video List */}
                            <Link to="/chapter02">
                                <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                    <div className="flex items-center"> {/* Flex container */}
                                        <div className="w-20 h-20 bg-blue-200 mr-4"></div> {/* Square div */}
                                        <div>
                                            <h3 className="text-lg font-semibold">Chapter 2</h3>
                                            <p className="text-sm">State Management in React</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 mr-5">
                                        <FontAwesomeIcon icon={faVideo} />
                                    </div>
                                </div>
                            </Link>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-20 h-20 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-lg font-semibold">Chapter 2</h3>
                                        <p className="text-sm">State Management in React</p>
                                    </div>
                                </div>
                                <div className="text-gray-600 mr-5">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-20 h-20 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-lg font-semibold">Chapter 2</h3>
                                        <p className="text-sm">State Management in React</p>
                                    </div>
                                </div>
                                <div className="text-gray-600 mr-5">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>

                            {/* Add more video items as needed */}
                        </div>
                    </div>
                )}
            </div>
        </div>
        )
    }

    const MobileView = ()=>{
        return(
            <div className="pb-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-40 gap-4 md:gap-8">
                <div className="mt-7 md:mt-7 md:ml-20 col-span-1">
                    <h1 className="text-2xl text-center font-serif font-medium mb-3">Induction Program</h1>
                    <p className="text-sm text-center">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                    <div className="mt-10 h-10 w-40 p-1 rounded-lg shadow-lg">
                        <Link to="/induction_complete">
                            <h1 className="text-sm">All Chapters Completed</h1>
                            <div className="w-36 h-0.5 bg-blue-400"></div>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 flex justify-around items-center mt-7 space-x-4">
                    <div className="w-28 h-24 bg-slate-300 flex flex-col items-center justify-center text-center rounded-lg">
                        <h1 className="text-2xl">08</h1>
                        <h2 className="text-sm">Chapters</h2>
                    </div>
                    <div className="w-28 h-24 bg-slate-300 flex flex-col items-center justify-center text-center rounded-lg">
                        <h1 className="text-2xl">01</h1>
                        <p className="text-sm">Certificate</p>
                    </div>
                    <div className="w-28 h-24 bg-slate-300 flex flex-col items-center justify-center text-center rounded-lg">
                        <h1 className="text-2xl">10</h1>
                        <h3 className="text-sm">hrs</h3>
                        <p className="text-xs">Duration</p>
                    </div>
                </div>
            </div>

            <div className="mt-14 gap-4 md:gap-8">
                <div className="ml-0 md:ml-20 mt-10">
                    <div>
                        <h1 className="text-lg text-center font-medium mb-4">Course Overview</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, ipsam!</p>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-lg text-center font-medium mb-4">What you'll learn</h1>
                        <ul className="ml-7 list-disc text-sm">
                            <li>Lorem ipsum dolor sit.</li>
                            <li>Lorem ipsum dolor sit.</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-lg font-medium text-center mb-4">Test</h1>
                        <ul className="ml-7 list-disc text-sm">
                            <li>10 quick test</li>
                            <li>1 final assignment</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Nav */}
            <div className="flex mt-16 ml-0 overflow-x-auto">
                <span
                    className={`cursor-pointer py-2 text-lg ${activeTab === "part1" ? "border-b-2 border-blue-500" : ""
                        } mr-4`}
                    onClick={() => setActiveTab("part1")}
                >
                    Part 1
                </span>
                <span
                    className={`cursor-pointer py-2 text-lg ${activeTab === "part2" ? "border-b-2 border-blue-500" : ""
                        }`}
                    onClick={() => setActiveTab("part2")}
                    style={{ marginLeft: "1rem" }} // Add margin-left
                >
                    Part 2
                </span>
            </div>

            {/* Content based on selected tab */}
            <div className="mt-10 mb-6">
                {activeTab === "part1" && (
                    <div>
                        <div className="grid grid-cols-1 gap-4">
                            {/* Video List */}
                            <Link to="/chapter01">
                                <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                    <div className="flex items-center"> {/* Flex container */}
                                        <div className="w-12 h-12 bg-blue-200 mr-4"></div> {/* Square div */}
                                        <div>
                                            <h3 className="text-medium font-semibold">Chapter 1</h3>
                                            <p className="text-xs">Introduction to React</p>
                                        </div>
                                    </div>

                                    <div className="text-gray-600 ">
                                        <FontAwesomeIcon icon={faVideo} />
                                    </div>
                                </div>
                            </Link>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-12 h-12 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-medium font-semibold">Chapter 1</h3>
                                        <p className="text-xs">Introduction to React</p>
                                    </div>
                                </div>

                                <div className="text-gray-600">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-12 h-12 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-medium font-semibold">Chapter 1</h3>
                                        <p className="text-xs">Introduction to React</p>
                                    </div>
                                </div>

                                <div className="text-gray-600">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-12 h-12 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-medium font-semibold">Chapter 1</h3>
                                        <p className="text-xs">Introduction to React</p>
                                    </div>
                                </div>

                                <div className="text-gray-600">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>


                            {/* Add more video items as needed */}
                        </div>
                    </div>
                )}
                {activeTab === "part2" && (
                    <div>
                        <div className="grid grid-cols-1 gap-4">
                            {/* Video List */}
                            <Link to="/chapter02">
                                <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                    <div className="flex items-center"> {/* Flex container */}
                                        <div className="w-12 h-12 bg-blue-200 mr-4"></div> {/* Square div */}
                                        <div>
                                            <h3 className="text-medium font-semibold">Chapter 2</h3>
                                            <p className="text-xs">State Management in React</p>
                                        </div>
                                    </div>
                                    <div className="text-gray-600">
                                        <FontAwesomeIcon icon={faVideo} />
                                    </div>
                                </div>
                            </Link>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-12 h-12 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-medium font-semibold">Chapter 2</h3>
                                        <p className="text-xs">State Management in React</p>
                                    </div>
                                </div>
                                <div className="text-gray-600">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-slate-100 hover:bg-slate-300 cursor-pointer rounded-xl shadow-lg">
                                <div className="flex items-center"> {/* Flex container */}
                                    <div className="w-12 h-12 bg-blue-200 mr-4"></div> {/* Square div */}
                                    <div>
                                        <h3 className="text-medium font-semibold">Chapter 2</h3>
                                        <p className="text-xs">State Management in React</p>
                                    </div>
                                </div>
                                <div className="text-gray-600">
                                    <FontAwesomeIcon icon={faVideo} />
                                </div>
                            </div>

                            {/* Add more video items as needed */}
                        </div>
                    </div>
                )}
            </div>
        </div>
        )
    }

    return (
        <div>
            {isMobile ? <MobileView/> : <DesktopView/>}
        </div>
    );
}

export default Start_Induction;
