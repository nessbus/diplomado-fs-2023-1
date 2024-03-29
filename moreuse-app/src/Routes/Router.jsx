// lazy-loadyng se usa para cuando las paginas crecen mucho
import React, {Suspense, useEffect} from 'react'; // linea para trabajar con "Lazy loading" o "carga perezosa"
import {createBrowserRouter, useLocation} from 'react-router-dom';
import { LazyLoading } from '../Components/LazyLoadinng';
// import Profile from '../Pages/Profile';
// import Singup from '../Pages/Singup';



const Home = React.lazy(() => import('../Pages/Home/Index') );
const WearDetail = React.lazy(() => import('../Pages/WearDetail'));
const Singup = React.lazy(() => import('../Pages/Singup') );
const Profile = React.lazy(() => import('../Pages/Profile') );
const AddClothing= React.lazy(() => import('../Pages/AddClothing') );
const MyClothes= React.lazy(() => import('../Pages/MyClothes') );
const Loguot= React.lazy(() => import('../Pages/Logout') );
const Order= React.lazy(() => import('../Pages/Order') );
const Login = React.lazy(() => import('../Pages/Login').then((module) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(module);
    },1000);
  })
}));

//las siguientes dos lineas se usarian sino trabajamos con lazy loading
//import { Home } from '../Pages/Home/Index'; //podemos omitir index pero no es necesario pues ese archivo siempre lo toma por defecto
//import { WearDetail } from '../Pages/WearDetail';


export const router = createBrowserRouter([
  {
    path: "/",
    element: //
    <Suspense fallback={<LazyLoading/>}>
      <Home/>

    </Suspense>
  },
  {
    path: "/wear-detail/:id",
    element:
    <Suspense fallback={<LazyLoading/>}>
      <WearDetail />
    </Suspense>
  },


  {
    path: "/login",
    element:
      <Suspense fallback={<LazyLoading/>}>
        <Login />
      </Suspense>

  },
  {
    path: "/Singup",
    element:
       <Suspense fallback={<LazyLoading/>}>
        <Singup />
      </Suspense>

  },
  {
    path: "/logout",
    element:
       <Suspense fallback={<LazyLoading/>}>
        <Loguot />
      </Suspense>
  },
  {
    path: "/Profile",
    element:
       <Suspense fallback={<LazyLoading/>}>
        <Profile />
      </Suspense>
  },
  {
    path: "/MyClothes",
    element:
       <Suspense fallback={<LazyLoading/>}>
        <MyClothes />
      </Suspense>

  },
  {
    path: "/AddClothing",
    element:
       <Suspense fallback={<LazyLoading/>}>
        <AddClothing />
      </Suspense>

  },
  {
    path: "/Order",
    element:
       <Suspense fallback={<LazyLoading/>}>
        <Order />
      </Suspense>

  }

]);
