
// import {home} from "../pages/home" // esta linea se usaria sino trabajo con react-router
import { RouterProvider } from "react-router-dom"
import { MenuContextStore } from "./Contexts/MenuContext"
import { GlobalStyle } from "./globalStyles"
import { router } from "./Routes/Router"


export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MenuContextStore>
        <RouterProvider router = {router}/>
      </MenuContextStore>
    </>

  )
}
