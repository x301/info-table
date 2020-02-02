import React, { useState } from "react";
import "./search.css";

export default ({ onSearch }) => {
    const [value, setValue] = useState(``)
    const valChangeHandler = event => {
        setValue(event.target.value)
    }
    return (
        <div className="search-wrapper">
            <div className="search-form">
                <input type="text"
                    className="input-contorl"
                    onChange={valChangeHandler}>
                </input>
                <button className="btn-search" onClick={() => onSearch(value)}>Найти</button>
            </div>

        </div>
    )
}