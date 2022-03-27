import React from "react";

const {
    Provider: SwapServiceProvider,
    Consumer: SwapServiceConsumer
} = React.createContext();

export {
    SwapServiceConsumer,
    SwapServiceProvider
}