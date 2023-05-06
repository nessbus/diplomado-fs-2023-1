import {Link} from 'react-router-dom';
import { MenuCloseWraper, MenuContainer, MenuItemsWraper } from './styles';
import {IoClose} from 'react-icons/io5';
import { useContext } from 'react';
import { MenuContext } from '../../Contexts/MenuContext';

const OptionsMenu = [
  {
    name: "Inicio",
    path: "/"
  },
  {
    name: "Perfil",
    path: "/profile"
  },
  {
    name: "Mis Prendas",
    path: "/MyClothes"
  },
  {
    name: "Iniciar Sesión",
    path: "/login"
  },
  {
    name: "Registrate",
    path: "/Singup"
  },


]

export const Menu = () => {

  const {menuState, onChangeOpenCloseMenu} = useContext(MenuContext);


  return(
    //las siguientes 2 lineas son tienen las propiedades de abrir y cerrar menu
    <MenuContainer isShown={menuState.isOpen}>
      <MenuCloseWraper onClick={onChangeOpenCloseMenu}>
        <IoClose />
      </MenuCloseWraper>
      <MenuItemsWraper>
        {//en la etiqueta link "key" es para evita errores de pagina y
        // a cada item de la lista le agrega el indice (index)
        }
        {
          OptionsMenu.map((item, index) => (
              <Link key={index} to={item.path}><li>{item.name}</li></Link>
            )
          )
        }
        <div>
          <img width="150%" src="assets/logo MU-03.png" />
        </div>
      </MenuItemsWraper>
    </MenuContainer>

  )
}
