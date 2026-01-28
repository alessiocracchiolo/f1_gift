import "./IntroScreen.scss"

import Bg from '../assets/jean.jpeg'

interface IntroScreenProps {
    onStart: () => void;
}

export const IntroScreen = ({ onStart }: IntroScreenProps) => (
    <section id="intro-screen">
        <div className="f1-checkered-flag"></div>
        <div className="intro-content">
            <div className="f1-logo-text">
                <img src={Bg} alt="Jean" />
            </div>
            <button className="start-button" onClick={onStart}>Scopri il regalo</button>
        </div>
    </section>
)