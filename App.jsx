
import { useState } from "react"

import padsData from "./pads"

export default function App(props) {
    const [pads, setPads] = useState(padsData)
    console.log(pads)

    /**
     * Challenge: use a ternary to determine the backgroundColor
     * of the buttons
     * If darkMode is true, set them to "#222222"
     * If darkMode is false, set them to "#cccccc"
    */
    const btnColour = props.darkMode ? "#222222" : "#cccccc"
    const btnStlye = {
        backgroundColor: btnColour
    }

    const buttonElements = pads.map(
        pad => (<button style={btnStlye} key={pad.id}></button>)
    )

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
