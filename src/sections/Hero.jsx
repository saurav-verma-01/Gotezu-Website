import React from 'react'
import SearchBar from "../components/SearchBar.jsx";

const Hero = () => {
    return (
        <section className="bg-gradient min-h-screen">
            <h1 className="primary-heading bg-black/40 py-8 border-b-2 border-b-accent">AI Finds Your Ideal Trainer Match</h1>
            <div className="px-4">
                <SearchBar />
                <p className="my-4 header-text">Every session is a journey, every trainer a guide, and every client a partner. It’s about real learning and lasting impact.</p>
                <p className="my-4 header-text">The right trainer doesn’t just teach—they transform. Handpick yours or let our AI find the perfect match. No guesswork, no compromises—just real expertise, real impact. Because the right guidance creates unstoppable teams.</p>
                <p className="tag">Ready to meet yours?</p>
            </div>
        </section>
    )
}
export default Hero
