import styled from 'styled-components';

const PageLoading = styled.section`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

`;
//Clase para crear la animacion de loading de la pagina
//
const CustomLoader = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background:conic-gradient(#0000 10%,#766DF4);
  -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
  animation:s3 1s infinite linear;

@keyframes s3 {to{transform: rotate(1turn)}}
`;
//ahora usamos componentes creados de CSS
export const LazyLoading = () => {

  return(
    <PageLoading>
      <CustomLoader/>
    </PageLoading>
  )
}

// .custom-loader {
//   width:50px;
//   height:50px;
//   border-radius:50%;
//   background:conic-gradient(#0000 10%,#766DF4);
//   -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
//   animation:s3 1s infinite linear;
// }
// @keyframes s3 {to{transform: rotate(1turn)}}
