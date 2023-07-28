import React, {createContext, useState} from "react";
import { httpRequest, HTTP_METHODS } from "../../Utils/HttpRequest";
import { getToken, removeToken } from "../../Utils/TokenLocalStorage";

const initialState = {
  isAuth: false,
  name:'',
  email: '',
  phone: '',
  address:''
};

export const UserContext = createContext(initialState);

export const UserContexStore = (props) => {

  const [user, setUser] = useState(initialState);


  const setAuthorization = (userData) => {
    setUser({...userData, isAuth: true})
  }

  const removeAuthorization =( ) => {
    setUser ({initialState})
  }

  // useEffect(() => {
  //   validateSession();
  // }, []) //los corchetes vacios son para indicar al hook que debe iniciarse solo una vez

  const validateSession = () => {
    const token = getToken();
    if ( token  && !user.isAuth) {
      requestUser();

    }
  }

  const requestUser = async () => {
    try {
      //vamos al servidor guardamos en la variable response
      const response = await httpRequest ({
        method: HTTP_METHODS.GET,
        endpoint: '/auth',
        token: getToken()
      });

      const {data} = response;
      setAuthorization(data);
    } catch (error) {
      console.log('requestUser', error)
      removeAuthorization();
      removeToken();
    }
  }

  return (
    <UserContext.Provider value = {{user, validateSession, removeAuthorization }} >
      {props.children}

    </UserContext.Provider>
  )
}
