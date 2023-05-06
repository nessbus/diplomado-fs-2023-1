import styled from 'styled-components';

export const WearDetailContainer = styled.section`
  //border: 1px solid red;
  display: flex;
  flex-direction: column;

`;

export const WearImageContainer = styled.div`

  border: 1px solid green;
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

`;

export const WearDetailContent = styled.div`
  //border: 2px solid blue;
  margin: 0px 15px;
  text-align: center;
  font-family: "nunito";
  color: var(--ColorDB);

`;
