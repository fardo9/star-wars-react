import React, {useEffect, useState} from "react";

const withDetails = (View, getData, getImageUrl) => {
    return (props) => {
        const [personDetails, setPersonDetails] = useState(null);
        const [itemImage, setItemImage] = useState(null);

        const {personId} = props;

        useEffect(() => {
            updatePerson(personId)
        },[personId]);

        const onLoadedPerson = person => {
            setPersonDetails(person);
            setItemImage(getImageUrl(personId));
        };

        const updatePerson = (id) => getData(id).then(person => onLoadedPerson(person));

        return <View {...props} data={personDetails} image={itemImage} />
    }
}

export default withDetails;