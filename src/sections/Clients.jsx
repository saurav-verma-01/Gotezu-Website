import React from 'react'
import Client1 from '../assets/logos/client-1-removebg-preview.png';
import Client2 from '../assets/logos/client-2-removebg-preview.png';
import Client3 from '../assets/logos/client-3-removebg-preview.png';
import Client4 from '../assets/logos/client-4-removebg-preview.png';
import Client5 from '../assets/logos/client-5-removebg-preview.png';
import Client6 from '../assets/logos/client-6-removebg-preview.png';
import Client7 from '../assets/logos/client-7-removebg-preview.png';
import Client8 from '../assets/logos/client-8-removebg-preview.png';
import Client9 from '../assets/logos/client-9-removebg-preview.png';
import Client10 from '../assets/logos/client-10-removebg-preview.png';
import Client11 from '../assets/logos/client-11-removebg-preview.png';
import Client12 from '../assets/logos/client-12-removebg-preview.png';
import Client13 from '../assets/logos/client-13-removebg-preview.png';
import Client14 from '../assets/logos/client-14-removebg-preview.png';
import Client16 from '../assets/logos/client-16-removebg-preview.png';

const clientLogos = [
    Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8,
    Client9, Client10, Client11, Client12, Client13, Client14,  Client16
];

const Clients = () => {
    return (
        <section className="my-8 lg:my-16 max-w-8xl mx-auto overflow-hidden">
            <h2 className="subheading mx-auto">Trusted by Leaders, Chosen for Excellence</h2>
            <div className="flex my-8 gap-4 md:my-12 overflow-x-hidden">
                {clientLogos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Client ${index + 1}`} className="h-16 md:h-20 lg:h-24 w-auto object-contain" />
                ))}
            </div>
        </section>
    )
}
export default Clients
