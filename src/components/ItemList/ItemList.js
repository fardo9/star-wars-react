import React from 'react';
import ItemInfo from "./ItemInfo/ItemInfo";
import withData from "../../hoc/withData";
import PropTypes from 'prop-types';
import './ItemList.css';

const ItemList = (props) =>  {
    const {data, onSelectedPerson} = props;

    const renderItem = (persons) => {
        return persons.map((person) => {
            return(
                <ItemInfo
                    key={person.id}
                    person={person}
                    onSelectedPerson={onSelectedPerson}
                    children={person.name}
                />
            )
        })
    }
    return (
        <ul className="item-list list-group">
            {renderItem(data)}
        </ul>
    );
}

ItemList.defaultProps = {
    onSelectedPerson: () => {}
}

ItemList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSelectedPerson: PropTypes.func
}

export default withData(ItemList);