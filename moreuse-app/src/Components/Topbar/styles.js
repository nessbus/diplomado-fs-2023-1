import styled from 'styled-components';
import { TopbarHeight } from '../../globalStyles';

export const TopbarContainer = styled.header`
  display: flex;
  border-bottom: 2px solid #ccc;
  padding: 5px 10px;
  position: fixed; //para dejar fijo el contenedor y que no se desplace con la pantalla
  left: 0px;
  top: 0px;
  background-color: #fff;
  width: 100%;
  height: ${TopbarHeight}px; //linea para que la pagina empieze debajo del topbar segun lo que contiene la variable topbarheight

  div{
    //border: 1px solid red;
    display: flex;
  }

`;

export const MenuIconContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2.5em;
    color: var(--ColorDB);



  }

  &:hover{
    color: var (--ColorSB);
    cursor:Pointer;
  }

`;
