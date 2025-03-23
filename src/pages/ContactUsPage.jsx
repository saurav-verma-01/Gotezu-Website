import React from 'react'
import ContactUsHero from "../sections/ContactUsHero.jsx";
import ContactsContactForm from "../sections/ContactsContactForm.jsx";
import ContactCards from "../components/ContactCards.jsx";
import Faqs from "../sections/Faqs.jsx";
import Footer from "../sections/Footer.jsx";
import NavBar from "../sections/NavBar.jsx";

const ContactUsPage = () => {
    return (
        <section>

            <ContactUsHero />
            <div className="py-8 flex items-center justify-center">
                <ContactCards className="lg:grid-cols-4" />
            </div>
            <ContactsContactForm />

            <Faqs />

        </section>
    )
}
export default ContactUsPage
