import React from 'react'
import Circle1 from '../assets/circle1.svg';
import Circle2 from '../assets/circle2.svg';
import Circle3 from '../assets/circle3.png';
import Circle4 from '../assets/circle4.png';

const IconBox = () => {
    return (
        <div className="grid grid-cols-2 p-2 w-max h-max gap-2 rounded-lg border-2 border-accent my-4
            sm:gap-4 sm:p-4 md:my-0 md:order-1">
            <div className="w-18 h-18 sm:w-20 sm:h-20 border-2 border-accent rounded-full flex items-center justify-center">
                <img src={Circle1} alt="icon image" />
            </div>
            <div className="w-18 h-18 sm:w-20 sm:h-20 border-2 border-accent rounded-full flex items-center justify-center">
                <img src={Circle2} alt="icon image" />
            </div>
            <div className="w-18 h-18 sm:w-20 sm:h-20 border-2 border-accent rounded-full flex items-center justify-center">
                <img src={Circle3} alt="icon image" />
            </div>
            <div className="w-18 h-18 sm:w-20 sm:h-20 border-2 border-accent rounded-full flex items-center justify-center">
                <img src={Circle4} alt="icon image" />
            </div>
        </div>
    )
}
export default IconBox
