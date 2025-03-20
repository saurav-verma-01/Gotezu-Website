import React from 'react'
import NewHero from "../sections/NewHero.jsx";
import About from "../sections/About.jsx";
import Clients from "../sections/Clients.jsx";
import Features from "../sections/Features.jsx";
import ExploreTrainers from "../sections/ExploreTrainers.jsx";
import Empower from "../sections/Empower.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Faqs from "../sections/Faqs.jsx";
import Contacts from "../sections/Contacts.jsx";
import NavBar from "../sections/NavBar.jsx";
import Footer from "../sections/Footer.jsx";

const Home = () => {
    return (
        <>
            <NavBar />
            <NewHero />
            <About />
            <Clients />
            <Features />
            <ExploreTrainers />
            <Empower />
            <Testimonials />
            <Faqs />
            <Contacts />
            <Footer />
        </>
    )
}
export default Home
