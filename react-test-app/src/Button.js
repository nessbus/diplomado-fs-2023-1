export const Button = (props) => { // a la funcion le pasamos una sola propiedad "props"
    

    return (
            <button onClick={props.onPress}> {props.name} </button>
        )
        
}