import React from "react";
import ItemList from "../ItemList/ItemList";
import {withSwapService} from "../../hoc";

const mapPersonMethods = swapService => {
    return {
        getData: swapService.getAllPeople,
    }
}

const mapPlanetMethods = swapService => {
    return {
        getData: swapService.getAllPlanet,
    }
}
const mapStarshipMethods = swapService => {
    return {
        getData: swapService.getAllStarships,
    }
}

const PersonList = withSwapService(ItemList, mapPersonMethods);

const PlanetList = withSwapService(ItemList, mapPlanetMethods);

const StarshipList = withSwapService(ItemList, mapStarshipMethods);

export {
    PlanetList,
    PersonList,
    StarshipList
}