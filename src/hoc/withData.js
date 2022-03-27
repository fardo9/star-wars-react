import React, {useEffect, useRef, useState} from "react";
import Spinner from "../components/Spinner/Spinner";
import ErrorIndicator from "../components/ErrorIndicator/ErrorIndicator";

const withData = View => {
    return (props) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);
        const prevData = useRef();

        useEffect(() => {
            if(prevData !== props.getData) {
                updateData()
            }
        }, [data])

        const updateData = () => {
            props.getData()
                .then(loadData)
                .catch(onError)
        }

        const loadData = (data) => {
            setData(data);
            setLoading(false);
            setError(false)
        }
        const onError = () => {
            setError(true);
            setLoading(false);
        }

        if (loading) return <Spinner/>;
        if (error) return <ErrorIndicator/>

        return <View {...props} data={data} />
    }
}
export default withData;