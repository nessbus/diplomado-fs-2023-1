import styled, {createGlobalStyle} from 'styled-components';

export const TopbarHeight = 45;

export const GlobalStyle = createGlobalStyle`
  //"box-sizing: border-box;", lo que significa que se debe incluir el ancho y el alto de los bordes y el padding dentro del
  //tamaño total del elemento (en lugar de añadirse al tamaño total, que es lo que hace el modelo de caja predeterminado).
  *, ::after, ::before {
    box-sizing: border-box;
  }

  body{
    margin: 0 ;
    padding: 0;
    font-family: 'Nunito', 'Helvetica' //fuentes que vamos a usar en el poyecto

    //background-image: url('../assets/logo MU-02.png');
  }
  a{
    color: var(--ColorDB);
    text-decoration: none;
  }
  a:hover{
    color: var(--ColorSB);
  }

//Definir colores globales
  :root {
    --ColorBG: #E5EAF4;
    --ColorDB: #051b4c;
    --ColorSB: #48B5E0;
    --ColorGreen: #9DEA53;
  }

`;

export const FormContainer = styled.section`
  //border: 1px solid blue;
  padding: 0 20%;
  display: flex;
  justify-content: center;
  form {
    //border: solid yellow;
    width: 380px;
  }
`;

export const Content = styled.section`
  margin: 10px 20%;
`

export const FormControl = styled.div`
  //border: 5px solid green;
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;



  label {
    width: 100%;
    display: block;
    text-align: center;
    font-family: 'Nunito';
    color: var(--ColorDB);
    font-size: 1.3em;
  }
  input, textarea, select {
    width: 100%;
    font-family: "Nunito";
    font-size: 1.1em;
    border: 2px solid #2C2E83;
    padding: 10px 12px;
    text-align: center;
    border-radius: 4px;
  }

  textarea {
    text-align: left !important;

  }

  select {

  }

  span{
    color: red;
    font-size: 1em;

  }
`;



