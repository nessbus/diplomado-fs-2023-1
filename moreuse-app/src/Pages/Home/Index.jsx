//import { GlobalBodyContent } from "../../globalStyles";
import { useEffect, useState } from "react";
import { httpRequest, HTTP_METHODS } from "../../../Utils/HttpRequest";
import { Page } from "../../Components/Page";
import { WearItem } from "./Components/WearItems";
import { WearListContainer } from "./styles";

//Lista de Imagenes
//el siguiente WEAR_LIST es la manera de hacerlo si la imagenes estan en la carpeta de assetts
// pero en el caso de esta pagina estan en un bucket (Servidos Amazon) porque al final seran imagenes cargadas por los usuarios
// const WEAR_LIST = [
//   {
//     _id: 1,
//     image: '../assets/prendas/ch_shirt.webp',
//     imageBack: '../assets/prendas/ch_shirt_back.webp',
//     name: 'Camisa Cuadros',
//     target: 'Niño',
//     gender: '2 meses'
//   },
//   {
//     _id: 2,
//     image: '../assets/prendas/ch_summer_short.webp',
//     imageBack: '../assets/prendas/ch_summer_short_bk.webp',
//     name: 'Short Verano',
//     target: 'Niño',
//     gender: '6 meses'
//   },
//   {
//     _id: 3,
//     image: '../assets/prendas/gr_dress.webp',
//     imageBack: '../assets/prendas/gr_dress_back.webp',
//     name: 'Vestido',
//     target: 'Niña',
//     gender: '1 Año'
//   },
//   {
//     _id: 4,
//     image: '../assets/prendas/ch_vest.webp',
//     imageBack: '../assets/prendas/ch_vest_back.webp',
//     name: 'Chaleco',
//     target: 'Niño',
//     gender: '4 meses'
//   },
//   {
//     _id: 5,
//     image: '../assets/prendas/gr_orange_sweater.webp',
//     imageBack: '../assets/prendas/gr_orange_sweater_bk.webp',
//     name: 'Sweater',
//     target: 'Niña',
//     gender: '4 meses'
//   },
//   {
//     _id: 6,
//     image: '../assets/prendas/ch_short_jean_black.webp',
//     imageBack: '../assets/prendas/ch_short_jean_black_back.webp',
//     name: 'Jean Black',
//     target: 'Niño',
//     gender: '2 Años'
//   },
//   {
//     _id: 7,
//     image: '../assets/prendas/ch_woodcutter.webp',
//     imageBack: '../assets/prendas/ch_woodcutter_back.webp',
//     name: 'lumberjack Jacket',
//     target: 'Niño',
//     gender: '4 Años'
//   },
//   {
//     _id: 8,
//     image: '../assets/prendas/gr_skirt.webp',
//     imageBack: '../assets/prendas/gr_skirt_back.webp',
//     name: 'Falda',
//     target: 'Niña',
//     gender: '5 Años'
//   },
//   {
//     _id: 8,
//     image: '../assets/prendas/gr_overall.webp',
//     imageBack: '../assets/prendas/gr_overall_back.webp',
//     name: 'Overol',
//     target: 'Niña',
//     gender: '3 Años'
//   },
//];
// como estoy usando lazy loading mis exportacion de pagina debe ser la sgte

const Home = () => {

  const [clothes, setclothes] = useState([]);

  useEffect(() => {
    requestClothes();
  }, []);

  const requestClothes = async () => {
    try{
      const response = await httpRequest({ method: HTTP_METHODS.GET, endpoint: '/clothes'})
      const data = response.data.clothes;
      setclothes(data)
    } catch (error) {
      setclothes ([]);
    }
  }

  return (
      //<GlobalBodyContent>
        <Page>
          <WearListContainer>
            {
              clothes.map((item,key) => <WearItem key={key} {...item}  />)
              //los 3puntos se refieren a una desestructuracion del objeto, se le llama "spread operator"
            }
          </WearListContainer>
        </Page>
      //</GlobalBodyContent>
    )
}
export default Home;

// si no usara lazy loading en router.jsx entonces exporto el componente de la sgte manera
// export const Home = () => {

//   return (
//     <h1>Home Page Hello</h1>
//   )
// }
