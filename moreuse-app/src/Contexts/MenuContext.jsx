import { createContext, useState } from "react";

const initialState = {
  isOpen: false
};
export const MenuContext = createContext(initialState);

export const MenuContextStore = (props) => {

  const [menuState, setMenuState] = useState(initialState);

  //funcion para cambiar el estado
  const onChangeOpenCloseMenu = () =>{
    setMenuState({...menuState, isOpen: !menuState.isOpen}); //descompone el objeto para cambiar el estado del atributo del objeto
  }

  //linea para esconder el menu
  const onCloseMenu = () => {
    setMenuState({...menuState, isOpen: false})
  }

  return(
    <MenuContext.Provider value={{menuState,onChangeOpenCloseMenu, onCloseMenu}}>
      { props.children }
    </MenuContext.Provider>
  )
};

