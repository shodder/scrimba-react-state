
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

    // map over the maps array and if the current item
    // has the same ID as the one pass to toggle, then
    // flip its value
    function toggle(btnId) {
        console.log(`Clicked! ${btnId}`)
        /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */
        setPads(
            prevPads => prevPads.map(
                item => {
                    return item.id === btnId ? {
                        ...item,
                        on: !item.on
                    } : item
                }
            )
        )

    }
    
    const buttonElements = pads.map(pad => (
            <Pad key={pad.id} btnId={pad.id} color={pad.color} isOn={pad.on} handleToggle={toggle}/>
            // can use key in components as that is a React specific attribute so to pass an id down
            // just add another prop with the id to pass down. In this case btnId
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
