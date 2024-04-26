// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TourSection from "../../components/TourSection";
import { useState } from "react";

const Home = () => {
    const LoadInfo = useLoaderData();
  const [tourInfos, setTourInfos] = useState(LoadInfo)

    return (
        <div className="mt-12">
            <Banner></Banner>

            <TourSection 
            tourInfos={tourInfos}
            setTourInfos={setTourInfos}>
            </TourSection>
        </div>

    );
};

export default Home;

// https://i.ibb.co/3SPXTxK/pexels-bubi-2867732.jpg
// https://i.ibb.co/pWXcgpP/pexels-erik-karits-2093459-3732494.jpg
// https://i.ibb.co/jRt6NSC/pexels-pixabay-257433.jpg
// https://i.ibb.co/vxvpfkJ/pexels-pixabay-208444.jpg
// https://i.ibb.co/P92jQtB/pexels-pixabay-358229.jpg
// https://i.ibb.co/M9G1X12/pexels-kelly-1179532-19063446.jpg
// https://i.ibb.co/2qv1y0j/pexels-allphoto-bangkok-1628521-12001672.jpg
// https://i.ibb.co/rZvJvPW/pexels-allphoto-bangkok-1628521-5279020.jpg
// https://i.ibb.co/f06rwb3/pexels-allphoto-bangkok-1628521-12001661.jpg
// https://i.ibb.co/fvf10B7/pexels-yovanverma-2082103.jpg

