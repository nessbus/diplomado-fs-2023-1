import { Page } from '../../Components/Page';
import { Button } from '../../Components/Button';
import { FormContainer, FormControl,} from '../../globalStyles';
import { Link, } from 'react-router-dom';
import { ImageBackgroundContainer, LoginContainer, SignupContent } from './styles';
import {useForm} from 'react-hook-form'; //Hook para validar campos
import { emailExpRegular, } from '../../Constants';
import { httpRequest } from '../../../Utils/HttpRequest';
import { ALERT_ICON, Alert } from '../../Components/Alert/Alert';
import { setToken } from '../../../Utils/TokenLocalStorage';


const Login = () => {

  //funcion para los datos de validacion la primera props es la de useform encargada de validar registros
  const {register, handleSubmit, formState: {errors}} = useForm();

  //funcion encargada de cuando se haga submit ir al servidor, llevar los datos el nombre de esta funcion lo ponemos nosotros
  const onSubmitLogin = (data) => {
    validateUserRequest(data);
  }

  const validateUserRequest = async (data) => {
    try {
        const response = await httpRequest({
          endpoint: '/auth/login',
          body: data,
        });
        console.log(response);
        //const {token} = response.data; // Declaramos la variable token desde el data
        //setToken (token); // le agregamos a la variable token el token generado por el servidor

        Alert({icon: ALERT_ICON.SUCCESS, title: 'Bienvenido', text:'Acceso Valido'})
    }catch (error) {
      Alert({ icon: ALERT_ICON.ERROR, title: 'Credenciales Invalidas', text:'Acceso Denegado'});
    }
  }

  return (
    <Page title="Ingresar">
      <LoginContainer>
        <ImageBackgroundContainer>
          <img src="../assets/logo MU-02.png" alt="" />
        </ImageBackgroundContainer>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitLogin)} noValidate>
            <FormControl>
              <label>Correo electrónico</label>
              {/* Cada elemento del formulario se le coloca ...register y el nombre del campo para
              poderlo registrar en el (data) y luego poderlo enviar a guardar */}
              <input type='text' {...register("email",
                {required: true, pattern: emailExpRegular})} placeholder="Correo Electronico" />
              {errors.email?.type === 'required' && <span>Campo Requerido</span>}
              {errors.email?.type === 'pattern' && <span>Ingresa un Correo valido</span>}
            </FormControl>
            <FormControl>
              <label>Contraseña</label>
              <input type='password'{...register("password",
                {required:true,minLength:6})} placeholder="Contraseña" />
              {errors.password?.type === 'required' && <span>Campo Requerido</span>}
              {errors.password?.type === 'minLength' && <span>Minimo 6 Caracteres</span>}
              {/* {errors.password?.type === 'pattern' &&
                <span>La contraseña debe contener caracteres especiales, y al enos una mayuscula, una minuscula y un número
                </span>} */}
            </FormControl>
            <Button type="submit" text="Ingresar" />
            <SignupContent>
              <p>
                ¿Aún no tienes una cuenta?
              </p>
              <Link to="/Singup">Regístrate</Link>
            </SignupContent>
          </form>
        </FormContainer>
      </LoginContainer>
    </Page>
  )
}

export default Login;
