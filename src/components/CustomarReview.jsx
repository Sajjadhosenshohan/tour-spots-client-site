import { Fade } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa6";
import Btn from "./Btn";


const CustomarReview = () => {

    return (
        <div className="my-24">
            <div className="text-center mb-12 mx-auto w-2/3">
                <Fade direction="left">
                    <h2 className="font-bold text-4xl mb-3 " >Customer reviews</h2>
                    <p>Encourage customer reviews on social media by creating communities where customers are empowered to share their experiences or purchases properties</p>
                </Fade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* review 1 */}
                <div data-aos="fade-down" className="container flex flex-col w-full max-w-lg  mx-auto divide-y shadow-lg rounded-lg overflow-hidden border-2 bg-white text-black  relative cursor-pointer   hover:bg-secondary transition-all duration-300  ">
                    <div className="p-4 pb-0">
                        <div className="mb-3">
                            <img src="https://i.ibb.co/kh47drG/pexels-olly-914927.jpg" alt="Reviewer's Name" className="object-cover w-12 h-12 rounded-full " />
                        </div>

                        <div className=" flex justify-between">
                            <div>
                                <h4 className="font-bold">Jane Smith</h4>
                                <span className="text-xs ">1 week ago</span>
                            </div>

                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <FaStar className="text-orange-400" />
                                <span className="text-xl font-bold">4.8</span>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 space-y-3 text-sm ">
                        <p>The property was in excellent condition and the staff were very helpful. The location is convenient and the view is breathtaking.</p>
                        <p>The estate is well-maintained and offers a comfortable stay. Highly recommended for anyone looking for a peaceful retreat.</p>

                        <Btn title='Contact Reviewer'/>
                    </div>
                </div>
                {/* review 2 */}
                <div data-aos="fade-down" className="container flex flex-col w-full max-w-lg  mx-auto divide-y shadow-lg rounded-lg overflow-hidden border-2 bg-white text-black  relative cursor-pointer   hover:bg-secondary transition-all duration-300  ">
                    <div className="p-4 pb-0  ">
                        <div className="mb-3">
                            <img src="https://i.ibb.co/SJXbyDq/pexels-olly-840996.jpg" alt="Reviewer's Name" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>

                        <div className="flex justify-between">
                            <div>
                                <h4 className="font-bold">Robert Keyosaki</h4>
                                <span className="text-xs ">5 days ago</span>
                            </div>

                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <FaStar className="text-orange-400" />
                                <span className="text-xl font-bold">4.7</span>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 space-y-3 text-sm ">
                        <p>The property was in excellent condition and the staff were very helpful. The location is convenient and the view is breathtaking.</p>
                        <p>The estate is well-maintained and offers a comfortable stay. Highly recommended for anyone looking for a peaceful retreat.</p>

                        <Btn title='Contact Reviewer'/>
                    </div>
                </div>
                {/* review 3 */}
                <div data-aos="fade-down" className="container flex flex-col w-full max-w-lg  mx-auto divide-y shadow-lg rounded-lg overflow-hidden border-2 bg-white text-black  relative cursor-pointer   hover:bg-secondary transition-all duration-300  ">
                    <div className="p-4 pb-0  ">
                        <div className="mb-3">
                            <img src="https://i.ibb.co/ry0MtGQ/pexels-italo-melo-881954-2379004.jpg" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>

                        <div className=" flex justify-between">
                            <div>
                                <h4 className="font-bold">John Doe</h4>
                                <span className="text-xs ">5 days ago</span>
                            </div>

                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <FaStar className="text-orange-400" />
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>

                    </div>
                    <div className="p-4 space-y-3 text-sm ">
                        <p>The property was in excellent condition and the staff were very helpful. The location is convenient and the view is breathtaking.</p>
                        <p>The estate is well-maintained and offers a comfortable stay. Highly recommended for anyone looking for a peaceful retreat.</p>

                        {/* <button className=" bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Contact Reviewer
                        </button> */}
                        <Btn title='Contact Reviewer'/>
                    </div>
                </div>


            </div>
        </div>
    );

};

export default CustomarReview;
