import { useState } from "react"

export default function Pad(props) {
    const [padOn, setPadOn] = useState(props.isOn)
    
    const isOnSyle = padOn ? "on" : undefined

    function handleClick() {
        setPadOn(
            prevPadOn => !prevPadOn)
    }

    const btnStyle = {
        backgroundColor: props.color,
    }

    console.log(isOnSyle)

    return (
        <button className={isOnSyle} style={btnStyle} key={props.key} onClick={handleClick}></button>
    )
}