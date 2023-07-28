import { Page } from '../../Components/Page';
import { Button } from '../../Components/Button';
import { FormContainer, FormControl } from '../../globalStyles';
import { NumberPhoneContainer } from './styled';
import { useForm, Controller } from 'react-hook-form';
import { COUNTRIES, emailExpRegular, passwordExpRegular } from '../../Constants';
import { httpRequest } from '../../../Utils/HttpRequest';
import { useNavigate } from 'react-router-dom';
import { Alert, ALERT_ICON } from '../../Components/Alert/Alert';


const Singup = () => {

  //funcion para los datos de validacion la primera props es la de useform encargada de validar registros
  const {control, register, watch, handleSubmit, formState: {errors}} = useForm();
  const password = watch('password'); // Variable para guardar lo que contiene el imput de password, el segundo parametro puede ser una cadena vacia
  const navigate = useNavigate();

  //funcion encargada de cuando se haga submit ir al servidor, llevar los datos
  const onSubmitRegister = (data) => {
    registerUser(data);
  }

  const registerUser = async (data) => {
    try {
      const response = await httpRequest ({
        endpoint:'/auth/signup',
        body: data
      })

      console.log(response)
      console.log("Success Signup")
      Alert ({
        icon: ALERT_ICON.SUCCESS,
        title: 'Registro Exitoso',
        text: 'Ahora puedes iniciar Sesión',
        callback: () => {
          navigate('/login');
        }
      })


    } catch (error) {
      console.error(error);
      Alert({icon:ALERT_ICON.ERROR, title: 'Error',text:'Este correo ya esta en nuestra base de datos'});
    }


  }



  return (
    <Page title="Registro">

        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitRegister)} noValidate>

            <FormControl>
              {/* {<label>Nombre Completo</label>} */}
              <input type='text' {...register("name", {required: true} )} placeholder="Nombre Completo" />
              {errors.name?.type === 'required' && <span> Campo requerido</span> }
            </FormControl>
            <FormControl>
              {/* {<label>E-mail</label>} */}
              <input type='text' {...register("email",
                {required: true, pattern: emailExpRegular })} placeholder="Correo Electronico" />
              {errors.email?.type === 'required' && <span>Campo Requerido</span>}
              {errors.email?.type === 'pattern' && <span>Ingresa un Correo valido</span>}
            </FormControl>

            <FormControl>
              {/* <label>Contraseña</label> */}
              <input type='password' {...register( "password",
              {required: true, pattern: passwordExpRegular, minLength:8})} placeholder='Contraseña' />
              {errors.password?.type === 'required' && <span>Campo Requerido</span>}
              {errors.password?.type === 'minLength' && <span>Minimo 8 Caracteres</span>}
              {errors.password?.type === 'pattern' &&
               <span>La contraseña debe contener caracteres especiales, y al menos una mayuscula, una minuscula y un número
               </span>}
            </FormControl>
            <FormControl>
              {/* <label>Confirma Contraseña</label> */}
              <input type='password'
              {...register( "passwordConfirm",
              {required: true, pattern: passwordExpRegular,
                validate: (value) => value === password })} placeholder='Confirme Contraseña'
              />
              {errors.passwordConfirm?.type === 'required' && <span>Campo Requerido</span>}
              {errors.passwordConfirm?.type === 'minLength' && <span>Minimo 8 Caracteres</span>}
              {errors.passwordConfirm?.type === 'pattern' &&
               <span>La contraseña debe contener caracteres especiales, y al enos una mayuscula, una minuscula y un número
               </span>}
              {errors.passwordConfirm?.type === 'validate' && <span>Las contraseñas no coinciden</span>}
            </FormControl>
            <FormControl>
              {/* <label>Número de telefono</label> */}
              <NumberPhoneContainer>
                {/* <div>
                  <input className='indicative' type='text' value={"+57"}/>
                </div> */}
                <select {...register("countries")}>
                {
                  COUNTRIES.map((item, key) => <option key={item.id} value={item.id}> {( "+" + item.id + " - " + item.title)}</option>)
                }
                </select>
                <input {...register("phone", {required:true})} type="text"
                onKeyPress={(e) => {
                  const pattern = /^[0-9]+$/;
                  const inputChar = String.fromCharCode(e.charCode);
                  if (!pattern.test(inputChar)) {
                    e.preventDefault();
                  }
                }}

                />
              </NumberPhoneContainer>
              {errors.phone?.type === 'required' && <span>Campo Requerido</span>}
            </FormControl>
            <FormControl>
              <input name= "address" type='text' placeholder='Dirección'/>
            </FormControl>
            <Button text="Registrar" />
          </form>
        </FormContainer>
      </Page>
  )
}

export default Singup;
