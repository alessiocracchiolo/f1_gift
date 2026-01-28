import { IApp } from "../interface/IApp";
import { TActionType } from '../interface/TActionType';

export interface IAction {
    type: TActionType,
    payload?: any,
}

export const ReducerApp = ( initialState: IApp, action: IAction ): IApp => {
    switch ( action.type ) {
        case "STATUS change init-timer":
            return {
                ...initialState,
                currentStatus: "init-timer"
            };

        case "STATUS change countdown-active":
            return {
                ...initialState,
                currentStatus: "countdown-active"
            };

        case "STATUS change available-click":
            return {
                ...initialState,
                currentStatus: "available-click",
                stopwatch: new Date().getTime()
            };

        case "STATUS change too-soon":
            return {
                ...initialState,
                currentStatus: "too-soon"
            };
        case "STATUS change available-reset":
            return {
                ...initialState,
                currentStatus: "available-reset"
            };

        case "CURRENT-SECOND change":
            return {
                ...initialState,
                currentSecond: action.payload
            };

        case "STOPWATCH change millisecond":
            return {
                ...initialState,
                stopwatch: action.payload - initialState.stopwatch
            };
    
        default: return initialState
    }
}