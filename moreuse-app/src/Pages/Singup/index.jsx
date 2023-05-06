import { Page } from '../../Components/Page';
import { Button } from '../../Components/Button';
import { FormContainer, FormControl } from '../../globalStyles';
import { NumberPhoneContainer } from './styled';
import { useForm } from 'react-hook-form';
import { COUNTRIES, emailExpRegular, passwordExpRegular } from '../../Constants';


const Singup = () => {

  //funcion para los datos de validacion la primera props es la de useform encargada de validar registros
  const {register, handleSubmit, formState: {errors}} = useForm();

  //funcion encargada de cuando se haga submit ir al servidor, llevar los datos el nombre de esta funcion lo ponemos nosotros
  const onSubmitRegister = (data) => {
    console.log,('data',data);
  }

  return (
    <Page title="Registro">

        <FormContainer>
          <form onSubmit={handleSubmit(onSubmitRegister)} noValidate>
            <FormControl>
              {/*<label>Usuario</label>*/}
              <input type='text' {...register("user",
              {pattern: /^[a-z0-9]+$/, required:true, minLength:6, maxLength:10,}

              )} placeholder="Usuario" />
              {errors.user?.type === 'required' && <span>Campo Requerido</span>}
              {errors.user?.type === 'minLength' && <span>Nombre usuario, Minimo 6 Caracteres</span>}
              {errors.user?.type === 'maxLength' && <span>Usuario, Maximo 10 Caracteres</span>}
              {errors.user?.type === 'pattern' && <span>Usuario no debe tener espacios, ni mayusculas</span>}
            </FormControl>
            <FormControl>
              {/* {<label>Nombre Completo</label>} */}
              <input type='text' {...register("fullname", {required: true} )} placeholder="Nombre Completo" />
              {errors.fullname?.type === 'required' && <span> Campo requerido</span> }
            </FormControl>
            <FormControl>
              {/* {<label>E-mail</label>} */}
              <input type='text' {...register("emailAddress",
                {required: true, pattern: emailExpRegular })} placeholder="Correo Electronico" />
              {errors.emailAddress?.type === 'required' && <span>Campo Requerido</span>}
              {errors.emailAddress?.type === 'pattern' && <span>Ingresa un Correo valido</span>}
            </FormControl>
            <FormControl>
              {/* <label>Confirme E-Mail</label> */}
              <input type='text' {...register("emailAddress",
                {required: true, pattern: emailExpRegular})} placeholder="Confirme correo electronico" />
              {errors.emailAddress?.type === 'required' && <span>Campo Requerido</span>}
              {errors.emailAddress?.type === 'pattern' && <span>Ingresa un Correo valido</span>}
            </FormControl>
            <FormControl>
              <input type='text' placeholder='Dirección'/>
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
              {/* <label>Contraseña</label> */}
              <input type='text' {...register( "password",
              {required: true, pattern: passwordExpRegular})} placeholder='Contraseña' />
              {errors.password?.type === 'required' && <span>Campo Requerido</span>}
              {errors.password?.type === 'minLength' && <span>Minimo 8 Caracteres</span>}
              {errors.password?.type === 'pattern' &&
               <span>La contraseña debe contener caracteres especiales, y al enos una mayuscula, una minuscula y un número
               </span>}
            </FormControl>
            <FormControl>
              {/* <label>Confirma Contraseña</label> */}
              <input type='text'
              {...register( "passwordConfirm",
              {required: true, pattern: passwordExpRegular})} placeholder='Confirme Contraseña'
              />
              {errors.passwordConfirm?.type === 'required' && <span>Campo Requerido</span>}
              {errors.passwordConfirm?.type === 'minLength' && <span>Minimo 8 Caracteres</span>}
              {errors.passwordConfirm?.type === 'pattern' &&
               <span>La contraseña debe contener caracteres especiales, y al enos una mayuscula, una minuscula y un número
               </span>}

            </FormControl>
            <Button text="Registrar" />
          </form>
        </FormContainer>
      </Page>
  )
}

export default Singup;
