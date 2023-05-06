import styled from 'styled-components';

const ButtonStyled = styled.button`
  font-family: Nunito;
  width: 100%;
  background-color: var(--ColorDB);
  color: var(--ColorSB);
  font-size: 1.8em;
  padding: 8px 8px;
  border-radius: 6px;
  opacity: 0.95;
  cursor: pointer;
  border:none;
  margin: 0px 5px;
  &:hover{
    opacity: 20;
    color: var(--ColorGreen);
  }

`;
const ButtonContainer = styled.div`
  width:100%;
  display: flex;
`;
export const Button = ({ text = "", type, onPress }) => {

    return(
      <ButtonContainer>
        <ButtonStyled type={type} onClick={onPress}>
          { text }
        </ButtonStyled>
      </ButtonContainer>
    )
}


