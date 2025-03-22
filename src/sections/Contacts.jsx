import React from 'react'
import Contact1 from '../assets/Contact1.png';
import ContactCards from "../components/ContactCards.jsx";

const Contacts = () => {
    return (
        <section className="py-8 max-w-7xl mx-auto my-8">
            <div className="px-8 flex flex-col gap-6 items-center lg:grid lg:grid-cols-2">


            <div className="rounded-md bg-gradient w-full h-full max-w-xl">
                <img src={Contact1} alt="Contact Image" className="w-full h-full object-cover"/>
            </div>
            <ContactCards />
            </div>
        </section>
    )
}
export default Contacts
