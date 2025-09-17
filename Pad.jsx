
export default function Pad(props) {
    
    console.log(`props.btnId? ${props.btnId}`)
    console.log(`props.IsOn? ${props.isOn}`)
    const isOnSyle = props.isOn ? "on" : undefined

    const btnStyle = {
        backgroundColor: props.color,
    }

    console.log(`IsOn? ${isOnSyle}`)
    return (
        <button className={isOnSyle} style={btnStyle} key={props.key} onClick={() => props.handleToggle(props.btnId)}></button>
        // you have to use an anon function to pass function parameters to dom event handlers
        // normally onClick=function(event) is what is actually happening so you can pass your own param
        // instead use an anon onClick={(event) => function(WHATEVER YOU LIKE :)) - this works
        // you don't explicity put event in so onClick={() => function(WHATEVER YOU LIKE :))
    )
}