import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const Chapter01 = () => {
    const isMobile = useMediaQuery({ maxWidth: 480 });

    const Desktop = () => {
        return (
            <div className="relative">
                {/* Right side content */}
                <div className="absolute top-0 right-0 mt-8 mr-8 flex">
                    <Link to="/chapter01/quiz" className="mr-4">
                        <h1 className="mb-2 text-xs">Take Quiz</h1>
                    </Link>
                    <Link to="/rewatch">
                        <h1>Rewatch Chapter</h1>
                    </Link>
                </div>

                {/* Main content */}
                <div className="mt-8 mx-auto  md:max-w-2xl">
                    <h1 className="text-2xl font-serif font-medium text-slate-500 mb-9">Chapter 01:</h1>
                    <h1 className="text-3xl font-serif font-medium">Title Goes Here</h1>
                </div>
                <div className={`mt-8 flex justify-center items-center w-5/6 mx-auto md:mx-32 md:w-1/3 ${isMobile ? "h-44 w-52" : "h-96"} bg-slate-300`}>
                    <div className="text-gray-600 mr-5">
                        <FontAwesomeIcon icon={faVideo} className={`h-20 w-20 ${isMobile ? "h-10 w-10" : ""}`} />
                    </div>
                </div>

                <div className="text-left mt-8 mx-auto md:ml-16 mb-5 md:max-w-2xl">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptate perspiciatis, accusamus atque minus vitae. Saepe obcaecati fuga dolorem amet enim porro, expedita eum fugiat eveniet velit veritatis,
                        corporis similique maiores repellat magnam quas! Quibusdam ratione inventore aut? Voluptates, voluptatem. Modi, sequi atque.
                        Reprehenderit libero velit ipsa eius fugit aliquid mollitia nemo alias laborum quaerat, saepe laboriosam dolorum magnam aut sapiente numquam asperiores
                        reiciendis doloribus temporibus veniam dolore! Ipsum placeat culpa quia nihil, fugit architecto sit facilis accusantium veritatis possimus? Ipsum excepturi adipisci tenetur omnis aliquid minima hic animi debitis porro amet totam, ipsa architecto quia sequi ut quidem eaque.</p>
                </div>
            </div>
        )
    }

    const MobileView = () => {
        return (
            <div className="relative pb-12">
                {/* Main content */}
                <div className="mt-8 px-4  md:max-w-2xl">
                    <h1 className="text-xl font-serif font-medium text-center text-slate-500 mb-2">Chapter 01:</h1>
                    <h1 className="text-2xl text-center font-serif font-medium">Title Goes Here</h1>
                </div>
                <Link to="/chapter01/quiz" className="">
                    <h1 className=" mt-4 text-sm ml-5 text-blue-600 font-medium hover:underline">Take Quiz</h1>
                </Link>
                <Link to="/rewatch">
                    <h1 className="mt-4 text-sm ml-5 text-blue-600 font-medium hover:underline">Rewatch Chapter</h1>
                </Link>
                <div className={`mt-8 flex justify-center items-center mx-auto rounded-xl ${isMobile ? "h-44 w-52" : "h-96"} bg-slate-300`}>
                    <div className="text-gray-600 mr-5">
                        <FontAwesomeIcon icon={faVideo} className={`h-10 w-10`} />
                    </div>
                </div>


                <div className="mt-10 px-7 text-sm">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptate perspiciatis, accusamus atque minus vitae. Saepe obcaecati fuga dolorem amet enim porro, expedita eum fugiat eveniet velit veritatis,
                        corporis similique maiores repellat magnam quas! Quibusdam ratione inventore aut? Voluptates, voluptatem. Modi, sequi atque.
                        Reprehenderit libero velit ipsa eius fugit aliquid mollitia nemo alias laborum quaerat, saepe laboriosam dolorum magnam aut sapiente numquam asperiores
                        reiciendis doloribus temporibus veniam dolore! Ipsum placeat culpa quia nihil, fugit architecto sit facilis accusantium veritatis possimus? Ipsum excepturi adipisci tenetur omnis aliquid minima hic animi debitis porro amet totam, ipsa architecto quia sequi ut quidem eaque.</p>
                </div>
            </div>
        )
    }

    return (
        <div>
            {isMobile ? <MobileView /> : <Desktop />}
        </div>
    )
}

export default Chapter01;
