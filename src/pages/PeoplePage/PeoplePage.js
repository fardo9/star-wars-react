import React, {useState} from "react";
import {PersonDetails, PersonList} from "../../components/SWComponents";
import Row from "../../layout/Row/Row";

const PeoplePage = () => {
    const [selectedItem, setSelectedItem] = useState(1);

    const onSelectedPerson = id => {
        setSelectedItem(id)
    }

    return (
        <Row
            left={<PersonList onSelectedPerson={onSelectedPerson} />}
            right={<PersonDetails itemID={selectedItem} />}
        />
    )
}

export default PeoplePage;