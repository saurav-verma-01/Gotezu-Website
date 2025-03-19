import React from 'react'

const FilterBtn = ({title, className =""}) => {
    return (
        <button className={`filter-btn ${className}`}>{title}</button>
    )
}
export default FilterBtn
