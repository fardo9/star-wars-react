import React, {useState} from "react";
import {StarshipDetails, StarshipList} from "../../components/SWComponents";
import Row from "../../layout/Row/Row";

const StarshipPage = () => {
    const [selectedItem, setSelectedItem] = useState(1);

    const onSelectedPerson = id => {
        setSelectedItem(id)
    }

    return (
        <Row
            left={<StarshipList onSelectedPerson={onSelectedPerson} />}
            right={<StarshipDetails itemID={selectedItem} />}
        />
    )
}

export default StarshipPage;


