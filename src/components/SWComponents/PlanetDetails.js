import React from "react";
import ItemDetails from "../ItemList/ItemDetails/ItemDetails";
import {Record} from "../ItemList/ItemDetails/DetailsComponent/DetailsComponent";
import {withSwapService} from "../../hoc";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diameter' />
        </ItemDetails>
    )
}

const mapMethodsToProps = swapService => {
    return {
        getData: swapService.getPlanet,
        getImageUrl: swapService.getPlanetImage
    }
}

export default withSwapService(PlanetDetails, mapMethodsToProps);