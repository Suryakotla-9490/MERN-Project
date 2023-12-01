import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import Tasks from './components/Tasks';
import Addtask from './components/Addtask';
import Div from './components/Div';
import Carousel from './components/Carousel';
import CarouselSwiper from './components/CarouselSwiper';
import MySwiper from './components/MySwiper';
import OwnCarousel from './components/OwnCarousel';

function App() {
  let images = [
    {
        title: "img1",
        url: "/images/about.png"
    },
    {
        title: "img2",
        url: "/images/about.png"
    },
    {
        title: "img3",
        url: "/images/about.png"
    },
    {
        title: "img4",
        url: "/images/about.png"
    },
    {
        title: "img5",
        url: "/images/about.png"
    },
    {
        title: "img6",
        url: "/images/about.png"
    },
    {
        title: "img1",
        url: "/images/about.png"
    },
    {
        title: "img2",
        url: "/images/about.png"
    },
    {
        title: "img3",
        url: "/images/about.png"
    },
    {
        title: "img4",
        url: "/images/about.png"
    },
    {
        title: "img5",
        url: "/images/about.png"
    },
    {
        title: "img6",
        url: "/images/about.png"
    },
]
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>} />
         <Route path='/signUp' element={<Signup/>}/>
         <Route path='/tasks' element={<Tasks/>}/>
         <Route path='/addTask' element={<Addtask/>}/>
        </Routes>
        
     

    </div>
  );
}

export default App;
