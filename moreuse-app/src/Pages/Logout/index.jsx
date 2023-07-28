import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../../Utils/TokenLocalStorage";
//import { Alert, ALERT_ICON } from "../../Components/Alert/Alert";
import { UserContext } from "../../Contexts/UserContext"

const Logout = () => {
  const {removeAuthorization} = useContext(UserContext);
  const navigate = useNavigate();
  useEffect (() => {
    removeSession();
  }, [])

  const removeSession = () => {
    removeToken();
    removeAuthorization();
    setTimeout (() => {
      navigate('/')
    },2000)

    // Alert({
    //   icon: ALERT_ICON.INFO,
    //   title: 'Cerrando Sesion',
    //   text: '',
    //   setTimeout: (() => {
    //     navigate('/')
    //   },2000)
    // })
  }
  return (
    <p>cerrando sesion </p>
  )
}
export default Logout;
