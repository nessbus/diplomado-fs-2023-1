import { useForm } from 'react-hook-form';
import { Button } from "../../Components/Button";
import { Page } from "../../Components/Page";
import { GENDER, TARGETS } from "../../Constants";
import { FormContainer, FormControl } from "../../globalStyles";


const AddClothing = () => {

  //funcion para los datos de validacion la primera props es la de useform encargada de validar registros
  const {register, handleSubmit, formState: {errors}} = useForm();

  //funcion encargada de cuando se haga submit ir al servidor, llevar los datos el nombre de esta funcion lo ponemos nosotros
  const onSubmitAddClothig = (data) => {
    console.log('data',data);
  }


  return(
    <Page title= "Nueva Prenda" >
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitAddClothig)} noValidate>
          <FormControl>
            <label>Imagen</label>
            <input type='url' {...register("image",
              {required: true,})} />
            {errors.image?.type === 'required' && <span>Campo Requerido</span>}
          </FormControl>
          <FormControl>
            <input type='text' {...register("title",
              {required: true,})} placeholder="Tipo de Prenda"/>
            {errors.tittle?.type === 'required' && <span>Campo Requerido</span>}
          </FormControl>
          <FormControl>
            <label>Publico Objetivo</label>
            <select {...register("target")} >
              {
                TARGETS.map((item, key) => <option key={key} value={item} > {item} </option>)
              }
            </select>
          </FormControl>
          <FormControl>
            <label>Genero</label>
            <select {...register("gender")}>
              {
                GENDER.map((item, key) => <option key={item.id} value={item.id} > {item.title} </option>)
              }
            </select>
          </FormControl>
          <FormControl>
            <label>Descripcion</label>
               <textarea {...register("description", {required: true})}></textarea>
               {errors.description?.type === 'required' && <span>Campo Requerido</span>}
          </FormControl>
          <Button type="Submit" text="Guardar"/>
        </form>
      </FormContainer>
    </Page>
  )
}

export default AddClothing;
