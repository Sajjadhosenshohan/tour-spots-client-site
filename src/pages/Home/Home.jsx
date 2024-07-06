
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TourSection from "../../components/TourSection";
import { useContext, useState } from "react";
import Countries from "../../components/Countries";
import WhyChooseUs from "../../components/WhyChooseUs";
import CustomarReview from "../../components/CustomarReview";
import { AuthContext } from "../../Firebase/AuthProvider";
import { Helmet } from "react-helmet";

const Home = () => {
    const LoadInfo = useLoaderData();
    const [tourInfos, setTourInfos] = useState(LoadInfo)

    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex items-center justify-center my-[150px]">
            <div className="md:w-28 md:h-28 w-12 h-12 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Banner></Banner>

            <TourSection
                tourInfos={tourInfos}
                setTourInfos={setTourInfos}>
            </TourSection>

            <WhyChooseUs></WhyChooseUs>

            <Countries></Countries>

            <CustomarReview></CustomarReview>
        </div>

    );
};

export default Home;