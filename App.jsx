
import { useState } from "react"
import padsData from "./pads"
import Pad from "./Pad"

export default function App(props) {
    const [pads, setPads] = useState(padsData)
    console.log(pads)

    // const btnColour = props.darkMode ? "#222222" : "#cccccc"
    // const btnStlye = {
    //     backgroundColor: btnColour
    // }

    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */
    
    
    const buttonElements = pads.map(pad => (
            <Pad key={pad.id} color={pad.color} isOn={pad.on} />
        )
    )

    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
