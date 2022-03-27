import React, {useState} from 'react';
import {SwapServiceProvider} from "./context";
import Header from "./components/Header/Header";
import SwapService from "./services/SwapiServices";
import DummySwapService from "./services/DummySwapService";
import RandomPlanet from "./components/RandomPlanet/RandomPlanet";
import {PeoplePage, PlanetPage, StarshipPage} from "./pages";
import './App.css';

const App = () => {
    const [swapServices, setSwapServices] = useState(new SwapService());

    const onServiceChange = () => {
        setSwapServices((swap) => {
            const Services = swap instanceof SwapService
                ? DummySwapService : SwapService
           return new Services;
        })
    }

    return (
        <SwapServiceProvider value={swapServices}>
            <div className='container'>
                <Header onServiceChange={onServiceChange} />
                <RandomPlanet/>
                <PeoplePage/>
                <PlanetPage/>
                <StarshipPage/>
            </div>
        </SwapServiceProvider>
    );
};

export default App;
