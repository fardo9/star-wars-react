import React from "react";

const ItemInfo = ({onSelectedPerson, person, children}) => {
    return (
        <li
            className="list-group-item"
            onClick={() => onSelectedPerson(person.id)}
        >
            {children}
        </li>
    )
}

export default ItemInfo;