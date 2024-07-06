import { Fade } from "react-awesome-reveal";
import { CgGym } from "react-icons/cg";
import { FaBiking } from "react-icons/fa";
import { FaPersonSwimming, FaWifi } from "react-icons/fa6";
import { GiSolarPower } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";


const WhyChooseUs = () => {
    return (
        <section className=" mt-24 ">
            <div className="container mx-auto">

                <div className="text-center mb-12 mx-auto w-2/3 md:w-full">
                    <Fade direction="left">
                        <h2 className="font-bold text-4xl mb-3 " >Why Travel with Us?</h2>
                        <p> Join us on an adventure of a lifetime and discover why travelers around the globe trust us to make their journeys extraordinary.</p>
                    </Fade>
                </div>


                <div className="grid gap-6 my-16 lg:grid-cols-3 ">

                    {/* 1 */}
                    <div className="flex items-center relative cursor-pointer  m-4 hover:bg-secondary transition-all duration-300  rounded overflow-hidden shadow-lg bg-white text-black">
                        <div className="w-2/3  flex justify-center">
                            <MdOutlineSecurity className="text-primary font-bold text-4xl" />
                        </div>
                        <div className="flex flex-col p-8 space-y-3 rounded-md">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">1</div>
                            <h3 className="text-2xl font-semibold">Best Security</h3>
                            <p >
                                When nothing prevents our to we like best, every pleasure to be.
                            </p>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="flex items-center relative cursor-pointer  m-4 hover:bg-secondary transition-all duration-300  rounded overflow-hidden shadow-lg bg-white text-black">
                        <div className="w-2/3  flex justify-center">
                            <FaWifi className="text-primary font-bold text-4xl" />
                        </div>
                        <div className="flex flex-col p-8 space-y-3 rounded-md">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">2</div>
                            <h3 className="text-2xl font-semibold">Free Internet</h3>
                            <p >
                                When nothing prevents our to we like best, every pleasure to be.
                            </p>
                        </div>
                    </div>

                    {/* 3*/}
                    <div className="flex items-center relative cursor-pointer  m-4 hover:bg-secondary transition-all duration-300  rounded overflow-hidden shadow-lg bg-white text-black">
                        <div className="w-2/3  flex justify-center">
                            <GiSolarPower className="text-primary font-bold text-4xl" />
                        </div>
                        <div className="flex flex-col p-8 space-y-3 rounded-md">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">3</div>
                            <h3 className="text-2xl font-semibold">Solar Energy</h3>
                            <p >
                                When nothing prevents our to we like best, every pleasure to be.
                            </p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className="flex items-center relative cursor-pointer  m-4 hover:bg-secondary transition-all duration-300  rounded overflow-hidden shadow-lg bg-white text-black">
                        <div className="w-2/3  flex justify-center">
                            <FaBiking className="text-primary font-bold text-4xl" />
                        </div>
                        <div className="flex flex-col p-8 space-y-3 rounded-md">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">4</div>
                            <h3 className="text-2xl font-semibold">Mountain Biking</h3>
                            <p >
                                When nothing prevents our to we like best, every pleasure to be.
                            </p>
                        </div>
                    </div>
                    {/* 5*/}
                    <div className="flex items-center relative cursor-pointer  m-4 hover:bg-secondary transition-all duration-300  rounded overflow-hidden shadow-lg bg-white text-black">
                        <div className="w-2/3  flex justify-center">
                            <FaPersonSwimming className="text-primary font-bold text-4xl" />
                        </div>
                        <div className="flex flex-col p-8 space-y-3 rounded-md">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">5</div>
                            <h3 className="text-2xl font-semibold">Swimming & Fishing</h3>
                            <p >
                                When nothing prevents our to we like best, every pleasure to be.
                            </p>
                        </div>
                    </div>
                    {/* 6*/}
                    <div className="flex items-center relative cursor-pointer  m-4 hover:bg-secondary transition-all duration-300  rounded overflow-hidden shadow-lg bg-white text-black">
                        <div className="w-2/3  flex justify-center">
                            <CgGym className="text-primary font-bold text-4xl" />
                        </div>
                        <div className="flex flex-col p-8 space-y-3 rounded-md">
                            <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xl font-bold rounded-full dark:bg-primary dark:text-gray-50">6</div>
                            <h3 className="text-2xl font-semibold">GYM and Yoga</h3>
                            <p >
                                When nothing prevents our to we like best, every pleasure to be.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;