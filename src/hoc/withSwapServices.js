import React from 'react'
import {SwapServiceConsumer} from "../context";

const withSwapService = (Wrapped, mapMethods) => {
    return props => {
        return (
            <SwapServiceConsumer>
                {(swapService ) => {
                    const swapServiceProps = mapMethods(swapService);
                    return  <Wrapped {...props} {...swapServiceProps} />
                }}
            </SwapServiceConsumer>
        )
    }
}

export default withSwapService;