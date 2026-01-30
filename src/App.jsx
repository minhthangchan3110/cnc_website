
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Intro from './pages/Intro';
import Layout from './Layout';
import Article from './pages/Article';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='Giới thiệu' element={<Intro/>}/>
          <Route path='Giới thiệu công ty Bảo Khang' element={<Article/>}/>
        </Route>
      </Routes>
    </Router>)
}


export default App
