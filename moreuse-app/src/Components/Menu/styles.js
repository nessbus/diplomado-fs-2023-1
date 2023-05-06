import styled from 'styled-components';

export const MenuContainer = styled.section`
  background-color: var(--ColorDB);
  border-right: 15px solid var(--ColorSB);
  width: 300px;
  position: fixed;
  top: 0px;
  height: 100%;
  display: ${ props => props.isShown ? 'block' : 'none' } //propiedad para mostrar u ocultar menu

  `;

export const MenuItemsWraper = styled.ul`
  padding: 0px 0px;
  a{
    //la "a" se refiere a lo que tiene que ver con texto o fuentes
    font-size: 1.6em;
    color: #fff;
    text-decoration: none; //Quita las lineas debajo de los item de lista
    :hover {
      color: var(--ColorSB);
    }
  }
  li{
    list-style: none; //Quita los puntos al principio de cada item de lista
    margin-top: 15px;
    padding: 0px 20px;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 285px;
    height: 55px;
    position: fixed;
    bottom: 0px;
    background-color: #fff;
    padding: 0px 75px
  }
`

export const MenuCloseWraper = styled.div`

    display: flex;
    justify-content: right;
    padding: 20px;

    svg {
      color: #fff;
      font-size: 1.3em;
      cursor: pointer;
      &:hover{
        color: var(--ColorSB);
      }
    }

`;
