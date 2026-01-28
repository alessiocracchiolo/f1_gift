import "./section-traffic-light.scss"

import { ColumnTrafficLight } from "./ColumnTrafficLight"

export const SectionTrafficLight = () => {
    const createColumnTrafficLight = () => {
        let array: JSX.Element[] = [];
        for (let i = 1; i <= 5; i++) {  array.push(<ColumnTrafficLight number={i}/>)  }
        return array;
    }

    return (
        <section id="section-traffic-light">
            <div id="container-traffic-light">
                {createColumnTrafficLight()}
            </div>
        </section>
    )
}