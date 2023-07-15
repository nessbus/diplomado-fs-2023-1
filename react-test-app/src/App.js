import React, { useState } from 'react'; //esta es auto importacion del fragmen
import { Button } from "./Button" // esta es autoimportacion del button

export const App = () => {
    
    // Aqui van ciertas lineas de codigo tales como:
    // estructuras de datos
    
    // hooks
    const [pets, setPets] = useState(["coco"]); // Variable de Estado para almacenar el arreglo de pets inicia arreglo en vacio
    const [inputNewPet, setInputNewPet] = useState(""); //

    // eventos
    const onChangeInputNewPet = (event) => {
        setInputNewPet(event.target.value); // para que permita escribir en un cuadro de texto

    }

    //Funciones
    const onAddPet = () => {
        setPets([...pets, inputNewPet]);     //esta linea contiene 3 puntos (String Operator) son para que un el arreglo no se referencie a otro
                                        // y podamos agregar items a un arreglo sin modificar otro arreglo anterior
        setInputNewPet(""); 

    }

    //la linea pets.map es para coger la variable pets y agregar lo que contiene a la lista UL
    return (
        // fragment
        <React.Fragment>

            <h1>hola crazy react  :) </h1>
            <Button name="enviar"/>
            <br /><br/>
            <Button name="DESCARGAR" />
            <br /><br/>
                     {//la sgte linea es la que contiene el texto que se agrega al UL
                     }
            <input value={inputNewPet} onChange={onChangeInputNewPet} type="text" placeholder="Ingrese mascota"/> 
            <Button name="Agregar" onPress={onAddPet} />
            <ul>                
                {
                     pets.map(item => <li>{item}</li>) //esta linea agrega los nombres de las mascotas al UL
                }
            </ul>
        </React.Fragment>
    )

    // los componnetes en react deben ser publicos
}
//Opcion 1 de exportar componente
//export default App;

//Opcion 2 Poner el 'export' directamente en la declaracion de la funcion