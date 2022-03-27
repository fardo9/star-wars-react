import React from "react";

const DetailsComponent = ({person, image, children}) => {
    return (
        <>
            <img
                className="person-image"
                src={image}
            />
            <div className="card-body">
                <h4>{person.name}</h4>
                <ul className="list-group list-group-flush">
                    { React.Children.map(children, (child) => {
                        return React.cloneElement(child, {person})
                    }) }
                </ul>
            </div>
        </>
    )
}

export default DetailsComponent;