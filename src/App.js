import logo from './logo.svg';
import "./style/style.css"
import { Link, Outlet } from 'react-router-dom';
import Menu from './components/Menu';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if(window.location.pathname === "/") {
      window.location.href = 'form/';
    }
    // console.log(window.location)
    // window.location.href = 'form/';
  })

  return (
    <div className='content'>
      <header>
        <Menu />
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
