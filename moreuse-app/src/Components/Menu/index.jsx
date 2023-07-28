import {Link} from 'react-router-dom';
import { MenuCloseWraper, MenuContainer, MenuItemsWraper } from './styles';
import {IoClose} from 'react-icons/io5';
import { useContext } from 'react';
import { MenuContext } from '../../Contexts/MenuContext';
import { UserContext } from '../../Contexts/UserContext';

const OptionsMenu = [
  {
    name: "Inicio",
    path: "/"
  },
  {
    name: "Inicio",
    path: "/",
    authRequired: true
  },
  {
    name: "Perfil",
    path: "/profile",
    authRequired: true
  },
  {
    name: "Mis Prendas",
    path: "/MyClothes",
    authRequired: true
  },
  {
    name: "Iniciar Sesión",
    path: "/login"
  },
  {
    name: "Registrate",
    path: "/Singup"
  },
  {
    name: "Cerrar Sesión",
    path: "/logout",
    authRequired: true
  }

]

export const Menu = () => {

  const {menuState, onChangeOpenCloseMenu} = useContext(MenuContext);
  const {user} = useContext(UserContext);


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
          // para mostrar las otras opciones del menu, por ahora ir a userContext y cambiar (isAuth: true)
          OptionsMenu.map((item, index) => {
            if (user.isAuth && item.authRequired) {
              return <Link key={index} to={item.path}><li>{item.name}</li></Link>
            }
            if (!user.isAuth && !item.authRequired) {
              return <Link key={index} to={item.path}><li>{item.name}</li></Link>
            }
          })
        }
        {/* <div>
          <img width="150%" src="assets/logo MU-03.png" />
        </div> */}
      </MenuItemsWraper>
    </MenuContainer>

  )
}
