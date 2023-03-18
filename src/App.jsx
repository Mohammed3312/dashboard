import React  from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Navebar from './components/Navbar';
import Footer from './components/Footer';
import Line from './pages/charts/Line';
import Sidebar from './components/Sidebar';
import ThemSettings from './components/ThemSettings';
import Ecommers from './pages/Ecommers';
import Orders from './pages/Orders';
import Calender from './pages/Calender';
import Employees from './pages/Employees';
import Stacked from './pages/charts/Stacked';
import Pyramid from './pages/charts/Pyramid'
import Customers from './pages/Customers';
import Kanban from './pages/Kanban';
import Area from './pages/charts/Area';
import Bar from './pages/charts/Bar';
import Pie from './pages/charts/Pie';
import Financial from './pages/charts/Financial';
import Colorpicker from './pages/Colorpicker';
import Colormapping from './pages/charts/Colormapping'
import Editor from './pages/Editor';
import './App.css';
import { useStateContext } from './context/Contextprovicer';










const App = () => {

  const{activeMenu,themeSettings,currentColor ,currentMode, setThemeSettings} = useStateContext();
  return (
  <div className={currentMode==='Dark'?'dark':''}>
    <Router>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
        <TooltipComponent content='Settings' position='Top'>
          <button type='button' className='p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray' style={{background:currentColor,borderRadius:'50%'}}
          onClick={()=>setThemeSettings(true)} >
            <FiSettings />
          </button>
        </TooltipComponent>
        </div>
        {activeMenu ?(
          <div className='fixed w-72 bg-white sidebar dark:bg-secondary-dark-bg'>
            <Sidebar/>
          </div>
        ):
        (<div className='w-0 dark:bg-secondary-dark-bg'>
          <Sidebar/>
        </div>)}
        <div className={
          activeMenu ? 'w-full min-h-screen dark:bg-main-dark-bg bg-main-bg md:ml-72' : 'w-full min-h-screen dark:bg-main-bg bg-main-bg flex-2'}>
            <div className='fixed w-full md:static bg-main-bg dark:bg-main-dark-bg navbar'> <Navebar/></div>
              {themeSettings&& <ThemSettings />}
          <Routes>
            {/* dashboard */}
            <Route path='/' element={<Ecommers/>}/>
            <Route path='/ecommerce' element={<Ecommers/>}/>
            {/* pages */}
            <Route path='/orders' element={<Orders/>} />
            <Route path='/employees' element={<Employees/>} />
            <Route path='/customers' element={<Customers/>} />
            {/* apps */}
            <Route path='/kanban' element={<Kanban/>} />
            <Route path='/editor' element={<Editor/>} />
            <Route path='/calendar' element={<Calender/>} />
            <Route path='/color-picker' element={<Colorpicker/>} />
            {/* charts */}
            <Route path='/line' element={<Line/>} />
            <Route path='/area' element={<Area/>} />
            <Route path='/bar' element={<Bar/>} />
            <Route path='/pie' element={<Pie/>} />
            <Route path='/financial' element={<Financial/>} />
            <Route path='/color-mapping' element={<Colormapping/>} />
            <Route path='/pyramid' element={<Pyramid/>} />
            <Route path='/stacked' element={<Stacked/>} />
          </Routes>
          </div>
        </div>
        <div>
      </div>
    </Router>
  </div>
  )
}

export default App