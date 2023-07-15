//import { GlobalBodyContent } from "../../globalStyles";
import { Page } from "../../Components/Page";
import { WearItem } from "./Components/WearItems";
import { WearListContainer } from "./styles";

//Lista de Imagenes
const WEAR_LIST = [
  {
    _id: 1,
    image: '../assets/prendas/ch_shirt.webp',
    imageBack: '../assets/prendas/ch_shirt_back.webp',
    name: 'Camisa Cuadros',
    target: 'Niño',
    gender: '2 meses'
  },
  {
    _id: 2,
    image: '../assets/prendas/ch_summer_short.webp',
    imageBack: '../assets/prendas/ch_summer_short_bk.webp',
    name: 'Short Verano',
    target: 'Niño',
    gender: '6 meses'
  },
  {
    _id: 3,
    image: '../assets/prendas/gr_dress.webp',
    name: 'Vestido',
    target: 'Niña',
    gender: '1 Año'
  },
  {
    _id: 4,
    image: '../assets/prendas/ch_vest.webp',
    name: 'Chaleco',
    target: 'Niño',
    gender: '4 meses'
  },
  {
    _id: 5,
    image: '../assets/prendas/gr_orange_sweater.webp',
    name: 'Sweater',
    target: 'Niña',
    gender: '4 meses'
  },
  {
    _id: 6,
    image: '../assets/prendas/ch_short_jean_black.webp',
    name: 'Jean Black',
    target: 'Niño',
    gender: '2 Años'
  },
  {
    _id: 7,
    image: '../assets/prendas/ch_woodcutter.webp',

    name: 'lumberjack Jacket',
    target: 'Niño',
    gender: '4 Años'
  },
  {
    _id: 8,
    image: '../assets/prendas/gr_skirt.webp',
    name: 'Falda',
    target: 'Niña',
    gender: '5 Años'
  },
  {
    _id: 8,
    image: '../assets/prendas/gr_overall.webp',
    name: 'Overol',
    target: 'Niña',
    gender: '3 Años'
  },
];
// como estoy usando lazy loading mis exportacion de pagina debe ser la sgte
const Home = () => {

  return (
      //<GlobalBodyContent>
        <Page>
          <WearListContainer>
            {
              WEAR_LIST.map((item,key) => <WearItem key={key} {...item}  />)
              //los 3puntos se refieren a una desestructuracion del objeto, se le llama "spread operator"
            }
          </WearListContainer>
        </Page>
      //</GlobalBodyContent>
    )
}
export default Home;

// si no usara lazy loading en router.jsx entonces eporto el componente de la sgte manera
// export const Home = () => {

//   return (
//     <h1>Home Page Hello</h1>
//   )
// }
