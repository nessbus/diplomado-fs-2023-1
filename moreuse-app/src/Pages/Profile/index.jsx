import { useContext } from "react"
import { Button } from "../../Components/Button"
import { Page } from "../../Components/Page"
import { UserContext } from "../../Contexts/UserContext"
import { Content, FormContainer, FormControl } from "../../globalStyles"
import { RegisterContainer } from "./styles"
import { ImageBackgroundContainer } from "./styles"
const Profile = () =>{

  const {user} = useContext(UserContext)

  return(

    <Page title= "Perfil">
      <Content>
        <RegisterContainer>
          <ImageBackgroundContainer>
            <img src="../assets/logo MU-03.png" alt="" />
          </ImageBackgroundContainer>
          <FormContainer>
            <form>
              <FormControl>
                <label className="labelinfo" style={{fontSize:'2 rem'}}>{user.name}</label>
                <h5 style={{margin:'0'}}>Nombre</h5>
              </FormControl>
              <FormControl>
                <label className="labelinfo" style={{fontSize:'2 rem'}}>{user.email}</label>
                <h5 style={{margin:'0'}}>Correo Electronico</h5>
              </FormControl>
              <FormControl>
                <label className="labelinfo" style={{fontSize:'2 rem'}}>************</label>
                <h5 style={{margin:'0'}}>Password</h5>
              </FormControl>
              <FormControl>
                <label className="labelinfo" style={{fontSize:'2 rem'}}>{user.address}</label>
                <h5 style={{margin:'0'}}>Direccion</h5>
              </FormControl>
              <FormControl>
                <label className="labelinfo" style={{fontSize:'2 rem'}}>{user.phone}</label>
                <h5 style={{margin:'0'}}>telefono</h5>
              </FormControl>
              <Button type="submit" text="Editar" />

            </form>
          </FormContainer>
        </RegisterContainer>
      </Content>
    </Page>
  )
}

export default Profile
