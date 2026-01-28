import { useContext } from 'react';
import { contextApp } from '../provider/ProviderApp';
interface props { number: number }

export const ColumnTrafficLight = ({ number }: props) => {
    const { state } = useContext(contextApp);
    const { currentSecond } = state;
    return (
        <div className="column-traffic-light">
            <div className="light light-other"/>
            <div className="light light-other"/>
            {
                currentSecond >= number
                ? <>
                    <div className="light light-red"/>
                    <div className="light light-red"/>
                </>
                : <>
                    <div className="light light-red-off"/>
                    <div className="light light-red-off"/>
                </>
            }
        </div>
    )
}