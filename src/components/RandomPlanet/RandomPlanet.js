import React, {Component, useEffect, useState} from 'react';
import './RandomPlanet.css';
import Spinner from "../Spinner/Spinner";
import PlanetView from "./PlanetView/PlanetView";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {withSwapService} from "../../hoc";
import {usePrevious} from "../../hooks/hooks";
import PropTypes from 'prop-types';

const RandomPlanet = ({getData, updateInterval}) => {
    console.log(typeof  getData)
  const [planet, setPlanet] = useState({
    id: null,
    name: 'Planet Name',
    population: null,
    rotationPeriod: null,
    diameter: null
  });

  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(false)
  const prevData = usePrevious(getData);

  useEffect(() => {
    if (getData !== prevData) {
      setInterval(() => updatePlanet(), updateInterval)
    }
  }, [getData])

  const onLoadedPlanet = (planet) => {
    setPlanet(planet);
    setLoaded(false);
  }

  const onError = () => {
    setError(true);
    setLoaded(false)
  }

  const updatePlanet = () => {
      const id = Math.floor(Math.random()*25) + 3;
      getData(id)
          .then(onLoadedPlanet)
          .catch(onError)
  }

  const hasData = !(loaded || error);
  const spinner = loaded ? <Spinner/> : null;
  const errorMessage = error ? <ErrorIndicator/> : null;
  const planetView = hasData ? <PlanetView planet={planet} /> : null;

  return (
      <div className="random-planet jumbotron rounded">
        { spinner }
        { errorMessage}
        { planetView }
      </div>

  );
}

const mapPlanetMethods = swapService => {
    return {
      getData: swapService.getPlanet,
    }
}

RandomPlanet.defaultProps = {
    updateInterval: 3000
}

RandomPlanet.propTypes = {
    updateInterval: PropTypes.number,
    getData: PropTypes.func
}





export default withSwapService(RandomPlanet, mapPlanetMethods);