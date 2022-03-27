import React, {useState} from "react";
import Row from "../../layout/Row/Row";
import {PlanetDetails, PlanetList} from "../../components/SWComponents";

const PlanetPage = () => {
    const [selectedItem, setSelectedItem] = useState(1);

    const onSelectedPerson = id => {
        setSelectedItem(id)
    }

    return (
        <Row
            left={<PlanetList onSelectedPerson={onSelectedPerson} />}
            right={<PlanetDetails itemID={selectedItem} />}
        />
    )
}

export default PlanetPage;