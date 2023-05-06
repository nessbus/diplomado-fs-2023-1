import { useParams } from 'react-router-dom';
import { Button } from '../../Components/Button';
import {Page} from '../../Components/Page';
import { WearDetailContainer, WearDetailContent, WearImageContainer,} from './styles';

const WearDetail= () => {

  const {id} = useParams();

  return (

      <Page>
        <WearDetailContainer>
          <WearImageContainer>
            <img src='../assets/prendas/ch_shirt.webp'/>
          </WearImageContainer>
          <WearDetailContent>
            <h5>referencia: {id}</h5>
            <h3>Camisa Leñadora</h3>
            <h4>2 meses / masculino</h4>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis et, vel porro quasi nihil corrupti odio maxime fugit facere doloremque magnam, quas ipsa quia ea rerum, molestiae modi est qui.
            </p>
          </WearDetailContent>
        </WearDetailContainer>
        <Button text="Comprar"/>
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
