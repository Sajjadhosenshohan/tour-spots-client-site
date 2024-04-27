// import { useLoaderData } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TourSection from "../../components/TourSection";
import { useState } from "react";
import Countries from "../../components/Countries";

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

            <Countries></Countries>
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

// for bangladesh
// https://i.ibb.co/tMHn1Z4/pexels-mithilamousaha-11356779.jpg 
// https://i.ibb.co/LrCXb99/pexels-khanshaheb-9711952.jpg 1
// https://i.ibb.co/Zhr0hvR/pexels-ferdous-13525370.jpg 1
// https://i.ibb.co/YfBY6mV/pexels-ferdous-6113097.jpg
// https://i.ibb.co/QHFDmpV/pexels-md-towhidul-islam-175863-3013018.jpg


// https://i.ibb.co/23QhJKM/pexels-preciousvietnam-2847871.jpg 1
// https://i.ibb.co/pKfHmgf/pexels-louis-phdc-153256-691541.jpg 1
// https://i.ibb.co/vvwnqbt/pexels-nguy-n-anh-vu-1449274-2796627.jpg 1
// https://i.ibb.co/0nFT73C/pexels-pixabay-33545.jpg 1
// https://i.ibb.co/9pw5RWJ/pexels-foodoncam-58597.jpg 1


// https://i.ibb.co/V95KvbL/pexels-pixabay-327494.jpg 1
// https://i.ibb.co/sPhMqsh/pexels-pixabay-460376.jpg 1
// https://i.ibb.co/3dPwr9k/pexels-postiglioni-824298.jpg 1
// https://i.ibb.co/R62c6sh/pexels-pixabay-208444-1.jpg
// https://i.ibb.co/gD0VKqK/pexels-miroalt-176398.jpg
// https://i.ibb.co/L6WL99x/pexels-tirachard-kumtanom-112571-472309.jpg