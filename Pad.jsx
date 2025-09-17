
export default function Pad(props) {

    const btnStyle = {
        backgroundColor: props.color
    }

    return (
        <button style={btnStyle} key={props.key}></button>
    )
}