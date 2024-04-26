// import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import TourSection from "../../components/TourSection";

const Home = () => {
    return (
        <div className="mt-12">
            <Banner></Banner>
            <TourSection></TourSection>
        </div>
    );
};

export default Home;