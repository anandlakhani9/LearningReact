const Button = (props) => {
    const handleClick = () => {
        props.onClick();
    }
    return (
        <button onClick={handleClick}>
            {props.purpose}
        </button>
    )
}

export default Button;