import styled from 'styled-components';

export const WearDetailContainer = styled.section`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-left: 15%;
  margin-right: 15%
`;

export const WearImageContainer = styled.div`

  //border: 1px solid green;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 30%; //Tamano imagen for default
    // para tablets o Smartphones la sgte:
    @media only screen and (max-width: 768px) {
      width: 50%;
    }
    height: auto;
  }

  .backImg{
    display: none;
  }

  &:hover {
    background-color: #ededed;
    border: 1px solid var(--ColorSB);
    .frontImg{
      display: none;
    }
    .backImg{
      display: block;
    }
  }

`;

export const WearDetailContent = styled.div`
  //border: 2px solid blue;
  margin: 0px 15px;
  text-align: center;
  font-family: "nunito";
  color: var(--ColorDB);

`;


