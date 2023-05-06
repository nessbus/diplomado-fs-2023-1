import {Page} from '../../Components/Page'
import { Button } from '../../Components/Button'
import { useNavigate } from 'react-router-dom'

const MyClothes = () => {

  //declaramos una variable para usar la navegacion en un componente a traves de useNavigate
  const navigate = useNavigate();

  return(
    <Page title="Mis Prendas">
      {/* boton para redirecionar desde una funci[on o evento] */}
      <Button text = "Agregar Prenda" onPress={ () => navigate("/addClothing") } />
      <section>
          <p>Listado de Prendas</p>
      </section>


    </Page>
  )
}

export default MyClothes;
