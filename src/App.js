import { Outlet, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import requests from './api/request';
import Nav from './components/Nav';
import styled from 'styled-components';
import Banner from './components/Banner';
import Category from './components/Category';
import Row from './components/Row';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import SearchPage  from './pages/search';
import DetailPage from './pages/detail';


const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <div className='app'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LoginPage />}></Route>
            <Route path="main" element={<MainPage />}></Route>
            <Route path=":movieId" element={<DetailPage />}></Route>
            <Route path="search" element={<SearchPage />}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;

// // params 이용해서 만들예정 
// movie id 받은 걸 가지고 
// 해당 영화 데이터 받고 
// -> 이미지를 보여주게 하겠음 

// useLocation() 
// localhost:3000/search?q=Papago => ?q=Papago 

// SearchParams
// ?q=Papago => Papago

// http://localhost:3000/123456 => 123456 (useParams)
// => 영화 데이터 받고
// 이미지를 받아 보여줌 