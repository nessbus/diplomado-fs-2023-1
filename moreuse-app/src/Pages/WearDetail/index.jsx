import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { httpRequest, HTTP_METHODS } from '../../../Utils/HttpRequest';
import { Alert, ALERT_ICON } from '../../Components/Alert/Alert';
import { Button } from '../../Components/Button';
import {Page} from '../../Components/Page';
import { UserContext } from '../../Contexts/UserContext';
import { WearDetailContainer, WearDetailContent, WearImageContainer,} from './styles';

const WearDetail = () => {

  const {id} = useParams();
  const {user} = useContext(UserContext)
  const [ clothe, setClothe] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    const requestClotheDetail = async () => {
      try {
        if (user.isAuth) {
          const response = await httpRequest({method: HTTP_METHODS.GET, endpoint: '/clothes/detail/' +id})
          const data = response.data;
          setClothe(response.data)

          if (data.gender === 'F') {
            data.gender= 'Femenino'
          } else {
            data.gender = 'Masculino'
          }

          switch (data.target) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "8":
            case "10":
            case "12":
            case "14":
            case "16":
              data.target=data.target + " Años"
              break
            case "2m":
              data.target = "2 meses"
              break
            case "4m":
              data.target = "4 meses"
              break
            case "6m":
              data.target = "6 meses"
              break
            case "8m":
              data.target = "8 meses"
              break
            case "10m":
              data.target = "10 meses"
              break
            case "12m":
              data.target = "12 meses"
              break
            case "18m":
                data.target = "2 meses"
                break
            default:
              data.target
          }

          console.log(data)

        } else {
          Alert({
            icon: ALERT_ICON.ERROR,
            title: 'Error',
            text: 'Acceso No valido debe loguearse',
            callback: () => {
              navigate ('/login')
            }
          })
        }
      } catch (error) {
        setClothe({})
        console.log("Error ocurrido:", error);
      }
    }
    requestClotheDetail()

    console.log(`Request URL: /clothes/detail/${id}`)

  }, []);

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
              <h1>{clothe.name}</h1>
              <h4>{clothe.gender} / {clothe.target}</h4>
              <p> {clothe.description} </p>
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
