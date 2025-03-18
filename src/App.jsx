import React from 'react'
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Clients from "./sections/Clients.jsx";
import Features from "./sections/Features.jsx";
import ExploreTrainers from "./sections/ExploreTrainers.jsx";
import Empower from "./sections/Empower.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Faqs from "./sections/Faqs.jsx";
import Contacts from "./sections/Contacts.jsx";
import NewHero from "./sections/NewHero.jsx";

const App = () => {
    return (
        <>
            <NewHero />
            <About />
            <Clients />
            <Features />
            <ExploreTrainers />
            <Empower />
            <Testimonials />
            <Faqs />
            <Contacts />

        </>
    )
}
export default App
