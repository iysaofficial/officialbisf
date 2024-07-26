
import NavbarComp from "../components/NavbarComps";
import HeroComps from "../components/home/HeroComps";
import AboutComps from "../components/home/AboutComps";
import FooterComps from "../components/FooterComps";
import CategoryComps from "../components/home/CategoryComps";
import OrganizedComps from "../components/home/OrganizedComps";
import TimevenueComps from "../components/home/TimevenueComps";
import BoothposterComps from "../components/home/BoothposterComps";


function Landing () {
    return (
        <div>
            <NavbarComp />
            <HeroComps />
            <AboutComps />
            <CategoryComps />
            <OrganizedComps />
            <TimevenueComps />
            <BoothposterComps />
            <FooterComps />
            
            
        </div>
    );
}

export default Landing;