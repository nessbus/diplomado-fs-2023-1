import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { httpRequest, HTTP_METHODS } from '../../../Utils/HttpRequest';
import { getToken } from '../../../Utils/TokenLocalStorage';
import { Button } from '../../Components/Button';
import {Page} from '../../Components/Page';
import { UserContext } from '../../Contexts/UserContext';
import { WearDetailContainer, WearDetailContent, WearImageContainer,} from './styles';


const WearDetail= ({_id, image, imageBack, name, target, gender, price }) => {

  const {id} = useParams();
  const {user} = useContext(UserContext)

  const [ clothe, setclothe] = useState({})
  console.log(id)

  useEffect(() => {
    requestClotheDetail();
  }, [])

  const requestClotheDetail = async () => {

    try {
      if (user.isAuth) {
      const response = await httpRequest ({
        method: HTTP_METHODS.GET, endpoint: `/clothes/detail/${id}`,
        headers: {
          Authorization: `Bearer ${getToken()}`, // Incluir el token de autenticación en la cabecera
        },
      })

      const data = response.data.clothe;
      setclothe(data)
      } else {
        console.log("Usuario no autenticado no se permite hacer la solicitud")
      }
    } catch (error) {
      setclothe({})
      console.log("Error ocurrido:", error);
    }

  }
  console.log(`Request URL: /clothes/detail/${id}`)
  console.log(clothe)


  return (

      <Page>
        <WearDetailContainer>
          <div>
            <WearImageContainer>

            <img className= "frontImg" width="100px" alt="Wear"  src={clothe.image}/>
            <img className= "backImg" width="100px" alt="Wear"  src={clothe.imageBack}/>

            </WearImageContainer>
            <WearDetailContent>
              <h5 >ref: {id}</h5>
              <h3>{name}</h3>
              <h4>2 meses / masculino</h4>
              <p> alkdfjkladjkasldjlkasd </p>
            </WearDetailContent>
          </div>
          <Button text="Comprar"/>
        </WearDetailContainer>

      </Page>

  )
}
export default WearDetail;

// si no usara lazy loading en router.jsx entonces eporto el componente de la sgte manera
// export const WearDetail= () => {

//   return (
//     <h1>Wear Detail Page</h1>
//   )
// }
