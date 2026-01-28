import { useContext, useState, useEffect } from 'react';

import { contextApp } from "./provider/ProviderApp";

import { IntroScreen } from './intro-screen/IntroScreen';
import { SectionTitle } from "./section-title/SectionTitle";
import { SectionTrafficLight } from "./section-traffic-light/SectionTrafficLight";
import { SectionText } from "./section-text/SectionText";
import { GiftReveal } from './gift-reveal/GiftReveal';

import "./config.scss";
import "./responsive.scss"

export const App = () => {
    const { countdown, state, dispatch } = useContext(contextApp)
    const { currentStatus, attempts, stopwatch, isGiftRevealed } = state;

    const [isStart, setIsStart] = useState(false);

    const startExperience = () => {
        setIsStart(true);
    }   

    /* WIN LOGIC CHECK */
    const checkWinCondition = (reactionTime: number) => {
        if (reactionTime > 0 && reactionTime < 300) {
            // WIN BY SKILL
            setTimeout(() => {
                dispatch({type: "GIFT reveal", payload: "skill"});
            }, 1000); // 1 secondo di suspense per leggere il tempo
        } else {
            // FAIL
            if (attempts >= 2) {
                 // WIN BY PITY (3rd attempt failed)
                 setTimeout(() => {
                    dispatch({type: "GIFT reveal", payload: "pity"});
                 }, 1000);
            } else {
                 dispatch({type: "ATTEMPTS increment"});
            }
        }
    }

    const handleFalseStart = () => {
         if (attempts >= 2) {
             // WIN BY PITY (3rd attempt jump start)
             setTimeout(() => {
                dispatch({type: "GIFT reveal", payload: "pity"});
             }, 1000);
        } else {
             dispatch({type: "ATTEMPTS increment"});
        }
    }


    const onInitTimer = () => {
        switch ( currentStatus ) {
            case "available-reset":
            case "init-timer":
            case "too-soon":
                countdown.start(
                    ()=>{ 
                        dispatch({type: "STATUS change available-click"});
                        dispatch({type: "CURRENT-SECOND change", payload: 0});
                    },
                    ()=>{ dispatch({type:"CURRENT-SECOND change", payload: 6-countdown.currentSecond}) },
                    ()=>{
                        dispatch({type:"STATUS change countdown-active"});
                        dispatch({type:"CURRENT-SECOND change", payload: 1});
                    },
                );
                break;

            case "available-click":
                countdown.reset();
                const now = new Date().getTime();
                // Calcoliamo manualmente qui per la logica checkWinCondition, 
                // anche se il reducer lo rifarà per lo state. 
                // Nota: stopwatch nello state in questo momento è il timestamp di INIZIO.
                const reactionTime = now - stopwatch;
                
                dispatch({type: "STATUS change available-reset"})
                dispatch({type: "STOPWATCH change millisecond", payload: now});
                
                checkWinCondition(reactionTime);
                break;
                
            case "countdown-active":
                countdown.reset();
                dispatch({type: "CURRENT-SECOND change", payload: 0});
                dispatch({type:"STATUS change too-soon"});
                handleFalseStart();
                break;
        }
    }

    return (

        !isStart ? <IntroScreen onStart={startExperience}/> 
        : isGiftRevealed ? <GiftReveal />
        :
        
        <div className="App">
            <SectionTitle/>
            <SectionTrafficLight/>
            <SectionText/>

            <button id='tap-screen' onClick={onInitTimer}/>
        </div>
    )
}