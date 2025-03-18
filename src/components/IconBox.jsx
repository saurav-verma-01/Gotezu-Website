import React from 'react'
import Circle1 from '../assets/circle1.svg';
import Circle2 from '../assets/circle2.svg';
import Circle3 from '../assets/circle3.png';
import Circle4 from '../assets/circle4.png';

const IconBox = () => {
    return (
        <div className="grid-cols-2 p-2 w-max h-max gap-2 rounded-lg border-2 border-accent lg:mt-auto mt-8 hidden md:grid">
            <div className="w-18 h-18 border-2 rounded-full flex items-center justify-center bg-accent border-honeysuckle-50">
                <img src={Circle1} alt="icon image" />
            </div>
            <div className="w-18 h-18 border-2 border-accent rounded-full flex items-center justify-center">
                <img src={Circle2} alt="icon image" />
            </div>
            <div className="w-18 h-18 border-2 border-accent rounded-full flex items-center justify-center">
                <img src={Circle3} alt="icon image" />
            </div>
            <div className="w-18 h-18 border-2 border-accent rounded-full flex items-center justify-center">
                <img src={Circle4} alt="icon image" />
            </div>
        </div>
    )
}
export default IconBox
