import { createContext, useMemo, useReducer } from 'react';
import { Countdown } from '../models/Coundown';
import { ReducerApp, IAction } from './ReducerApp';
import { IApp } from '../interface/IApp';

const initialState: IApp = {
    currentStatus: "init-timer",
    currentSecond: 0,
    stopwatch: 0
}

interface value {
    countdown: Countdown;
    state: IApp;
    dispatch: React.Dispatch<IAction>;
}

export const contextApp = createContext({} as value)
interface props { children : JSX.Element | JSX.Element[] }
export const ProviderApp = ({ children }: props) => {

    const countdown = useMemo(()=> new Countdown(5), []);
    const [state, dispatch] = useReducer(ReducerApp, initialState);

    return (
        <contextApp.Provider value={{
            countdown,
            state,
            dispatch
        }}>
            { children }
        </contextApp.Provider>

    )
}