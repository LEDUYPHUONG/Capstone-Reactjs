import logo from './logo.svg';
import './App.css';
import HeaderHome from './component/Header/HeaderHome';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HeaderHome />
      <Outlet />
    </div>
  );
}

export default App;
