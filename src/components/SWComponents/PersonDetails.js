import React from "react";
import ItemDetails from "../ItemList/ItemDetails/ItemDetails";
import {withSwapService} from "../../hoc";
import Record from "../ItemList/ItemDetails/DetailsComponent/Record/Record";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='gender' label='Gender' />
            <Record field='birthYear' label='Birth Year' />
            <Record field='eyeColor' label='Eye Color' />
            <Record field='hairColor' label='Hair Color' />
            <Record field='skinColor' label='Skin Color' />
        </ItemDetails>
        )
}

const mapMethodsToProps = swapService => {
    return {
        getData: swapService.getPerson,
        getImageUrl: swapService.getPersonImage
    }
}

export default withSwapService(PersonDetails, mapMethodsToProps);
