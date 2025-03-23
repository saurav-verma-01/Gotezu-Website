import React from 'react'
import AboutUsHero from "../sections/AboutUsHero.jsx";
import NavBar from "../sections/NavBar.jsx";
import AboutFeatures from "../sections/AboutFeatures.jsx";
import AboutEasiest from "../sections/AboutEasiest.jsx";
import AboutSolution from "../sections/AboutSolution.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Faqs from "../sections/Faqs.jsx";
import Footer from "../sections/Footer.jsx";

const AboutUs = () => {
    return (
        <>
            <AboutUsHero />
            <AboutFeatures />
            <AboutEasiest />
            <AboutSolution />
            <Testimonials />
            <Faqs />
        </>
    )
}
export default AboutUs
