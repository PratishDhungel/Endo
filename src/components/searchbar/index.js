import React from 'react'
import './searchbar.scss'

export default function Search() {
    return (
        <div>
            <div className="search-container">
                <label for="search">Search:</label>
                <input type="search" id="search" name="search" placeholder='Enter Keyword(s)' />
            </div>
        </div>
    )
}
