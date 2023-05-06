import styled from "styled-components";


export const WearItemContainer = styled.div`
  //border: 2px solid red;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
  font-family: Nunito;
  border-radius: 25px;

  h4{
    margin: 0px;
    color: var(--ColorDB);
  }
  h2 {
    color: var(--ColorDB);
    margin: 10px 0px;
  }

  &:hover {
    background-color: #ededed;
    border: 1px solid var(--ColorSB);
  }
`;

export const WearItemImage = styled.div`
  //border: 2px solid blue;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 8px 8px 12px 0px rgba(168,168,168,0.34);
    -moz-box-shadow: 8px 8px 12px 0px rgba(168,168,168,0.34);
    box-shadow: 8px 8px 12px 0px rgba(168,168,168,0.34);

  img{
    width: 100%;
    height: 100%;
  }

`;
