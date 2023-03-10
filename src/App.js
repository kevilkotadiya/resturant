import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Component/Layout';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Event from './Pages/Event';
import Chefs from './Pages/Chefs';
import Contact from './Pages/Contact';
import Booktable from './Pages/Booktable';
import EditBooktable from './Pages/EditBooktable';
import { Context } from './Context/ReactContext';
import { useState } from 'react'; 

function App() {

  const [theme, settheme] = useState('dark')

  const onclickHandler = () =>{
    settheme(theme === 'light' ? 'dark' : 'light'  )
  }

  console.log("THEME",theme);


  return (
    <div className="App">
      <Context.Provider  value={theme}>
        <button className='btn theme btn-danger' onClick={onclickHandler}>Change Theme</button>
      <Routes>
        <Route path='/' element={<Layout><Home/></Layout>}/>
        <Route path='/about' element={<Layout><About/></Layout>}/>
        <Route path='/menu' element={<Layout><Menu/></Layout>}/>
        <Route path='/event' element={<Layout><Event/></Layout>}/>
        <Route path='/chefs' element={<Layout><Chefs/></Layout>}/>
        <Route path='/contact' element={<Layout><Contact/></Layout>}/>
        <Route path='/book' element={<Layout><Booktable/></Layout>}/>
        <Route path='/editBooktable/:id' element={<Layout><EditBooktable/></Layout>}/>
      </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
