import React from "react";
import ItemDetails from "../ItemList/ItemDetails/ItemDetails";
import {withSwapService} from "../../hoc";
import Record from "../ItemList/ItemDetails/DetailsComponent/Record/Record";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='model' label='Model' />
            <Record field='manufacturer' label='Manufacturer' />
            <Record field='length' label='Length' />
            <Record field='crew' label='Crew' />
            <Record field='passengers' label='Passengers' />
        </ItemDetails>
    )
}

const mapMethodsToProps = swapService => {
    return {
        getData: swapService.getStarships,
        getImageUrl: swapService.getStarshipsImage

    }
}

export default withSwapService(StarshipDetails, mapMethodsToProps);