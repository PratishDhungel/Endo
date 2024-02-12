import React from 'react'
import './checkbox.scss'

function Checkbox({id,label}) {
    return (
        <>
        <div className='checkbox-container'>
                <input type="checkbox" id={id} />
                <label htmlFor={id}>{label}</label>
            </div>
        </>
    )
}

export default Checkbox
