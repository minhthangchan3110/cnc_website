
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Intro from './pages/Intro';
import Layout from './Layout';
import Article from './pages/Article';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='Intro' element={<Intro/>}/>
          <Route path='IntroDetails' element={<Article/>}/>
          <Route path='Products' element={<Products/>}/>
          <Route path='ProductDetail' element={<ProductDetail/>}/>
          <Route path='Contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>)
}


export default App
