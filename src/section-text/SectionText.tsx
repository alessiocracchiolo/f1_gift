import { useContext } from 'react';
import { contextApp } from '../provider/ProviderApp';

import "./section-text.scss"

export const SectionText = () => {
    const { state } = useContext(contextApp);
    const { currentStatus, stopwatch } = state;

    return (
        <section id="section-text">
            <h2>{
                currentStatus === "init-timer"  ?  "Click to start"
                : currentStatus === "available-click" ? "-"
                : currentStatus === "available-reset" ? stopwatch+"ms"
                : currentStatus === "countdown-active" ? "Await"
                : currentStatus === "too-soon" ? "Too soon" : "Error client"
            }</h2>

            {
                currentStatus === "available-reset" || currentStatus === "too-soon" 
                ? <h3>
                    <i className="fa-solid fa-arrow-rotate-left"/> Tap to reset
                </h3>
                : null
            }
        </section>
    )
}