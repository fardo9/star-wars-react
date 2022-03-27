import React from "react";

const Record = ({ person, field, label }) => {
    return(
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{person[field]}</span>
        </li>
    )
}

export default Record;