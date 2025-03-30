import React from 'react';
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
    Client9, Client10, Client11, Client12, Client13, Client14, Client16, Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8,
    Client9, Client10, Client11, Client12, Client13, Client14, Client16,
];

const Clients = () => {
    // Define CSS for the marquee animation
    const marqueeStyle = {
        display: 'flex',
        animation: 'marquee 15s linear infinite',
        whiteSpace: 'nowrap',
    };

    const marqueeKeyframes = `
        @keyframes marquee {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
    `;

    return (
        <section className="my-8 max-w-8xl mx-auto overflow-hidden relative">
            <style>{marqueeKeyframes}</style>
            <h2 className="subheading mx-auto mb-8 md:mb-12">Trusted by Leaders, Chosen for Excellence</h2>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white/80 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white/80 to-transparent" />

            <div className="relative overflow-hidden whitespace-nowrap py-8">
                <div className="flex" style={marqueeStyle}>
                    {/* First set of logos */}
                    {clientLogos.map((logo, index) => (
                        <div
                            key={`logo-${index}`}
                            className="flex-shrink-0 bg-white rounded-md shadow-md px-4 mx-4 h-20 flex items-center justify-center"
                            style={{ minWidth: '160px' }}
                        >
                            <img
                                src={logo}
                                alt={`Client ${index + 1}`}
                                className="w-auto h-12 md:h-16 max-h-16 object-contain opacity-100 hover:opacity-80 transition-opacity"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless looping */}
                    {clientLogos.map((logo, index) => (
                        <div
                            key={`logo-dup-${index}`}
                            className="flex-shrink-0 bg-white rounded-md shadow-md px-4 mx-4 h-20 flex items-center justify-center"
                            style={{ minWidth: '160px' }}
                        >
                            <img
                                src={logo}
                                alt={`Client ${index + 1}`}
                                className="w-auto h-12 md:h-16 max-h-16 object-contain opacity-100 hover:opacity-80 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;