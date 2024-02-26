
import './App.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MenuItems from './component/menuitems/menuItems';
import { Outlet } from 'react-router';
import { ContextAPI } from './component/contextAPI/contextAPI';
import Navbar from './component/navbar/navbar';


const App = () => {
    useEffect(() => {
      AOS.init()
    }, [])
  return (
    <ContextAPI>
      <div className="container mx-auto px-1 font-sans-Fo">
        <Navbar />
        <div className="grid grid-cols-12 mt-8 grid-flow-col grid-rows-1 gap-x-1 bg-slate-100 rounded-2xl">
          <MenuItems />
          <Outlet />
        </div>
      </div>
    </ContextAPI>
  )
}

export default App
