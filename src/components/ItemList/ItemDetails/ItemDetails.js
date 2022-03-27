import React, {useEffect, useRef, useState} from 'react';
import EmptyList from './EmtyList/EmptyList';
import DetailsComponent from './DetailsComponent/DetailsComponent';
import './ItemDetails.css';
import {usePrevious} from "../../../hooks/hooks";

const ItemDetails = (props) => {
    const {itemID, getData, getImageUrl, children} = props;
    const [personDetails, setPersonDetails] = useState(null);
    const [itemImage, setItemImage] = useState(null);

    const prevItemId = usePrevious(itemID);
    const prevData = usePrevious(getData)

    useEffect(() => {
        if(prevItemId !== itemID || prevData !== getData) {
            updateItem(itemID);
        }
    },[itemID, getData]);

    const onLoadedPerson = person => {
        setPersonDetails(person);
        setItemImage(getImageUrl(itemID));
    };
    const updateItem = (id) => {
        getData(id)
            .then(person => onLoadedPerson(person));
    };

    return (
        <div className="item-details card">
            {!personDetails
                ? <EmptyList/>
                : <DetailsComponent
                    image={itemImage}
                    personID={itemID}
                    person={personDetails}
                    children={children}
                />
            }
        </div>
    )
}
export default ItemDetails;
