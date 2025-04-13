/*
import React from 'react'

const FilterBtn = ({title, className =""}) => {
    return (
        <button className={`filter-btn ${className}`}>{title}</button>
    )
}
export default FilterBtn
*/

import React from 'react';

const FilterBtn = ({ title, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`filter-btn ${className}`}
        >
            {title}
        </button>
    );
};

export default FilterBtn;