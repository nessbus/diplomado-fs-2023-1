//Componente para repetir MENU en todas las paginas

import { useContext, useEffect, useState } from "react"
import { MenuContext } from "../../Contexts/MenuContext"
import { UserContext } from "../../Contexts/UserContext"
import { Menu } from "../Menu"
import { Topbar } from "../Topbar"
import { PageContainer, PageTitleContainer } from "./styles"

export const Page = (props) => {

  //linea para escuchar la ruta actual de la pagina (Path),
  //cada vez que una pagina se garga

  //const location = useLocation();

  const { onCloseMenu } = useContext(MenuContext);
  const { validateSession } = useContext(UserContext)


  // escuchar el cambio de estado de algo
  useEffect (() => {
    //se ejecuta una unica vez al inicio del componente
    hideMenu();
    validateSession();

  },[]);

  const hideMenu = () => {
    onCloseMenu();
  }


  return (
    <PageContainer>
      <Topbar/>
      {
        props.title && (
          <PageTitleContainer>
            <h1>{ props.title }</h1>
          </PageTitleContainer>
        )
      }

      <div>
        { props.children }
        {//La linea props.children hace relacion a que todo lo contenga cada pagina va a ir en este espacio
        }
      </div>

      <Menu/>
    </PageContainer>
  )
}
