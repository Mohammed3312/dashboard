import React,{useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import Cart from './Card'
import Chat from './Chat'
import Notifcation from './Notifcation'
import Userprofile from './Userprofile'
import { useStateContext } from '../context/Contextprovicer'

const NavButton=({tittle,customfunc,icon , color ,dotcolor })=>(
  <TooltipComponent content={tittle} position="BottomCenter">
    <button type='button' onClick={customfunc} style ={{color}}
    className='relative p-3 text-xl rounded-full hover:bg-light-gray' > 
    <span style={{background:dotcolor}} className='inline-flex absolute top-2 right-2 w-2 h-2 rounded-full'/>
      {icon}
    
    </button>
  </TooltipComponent>
)





const Navbar = () => {
  const{screenSize, setScreenSize,activeMenu , setActiveMenu , isClicked, currentColor , handleClick}=useStateContext();

  useEffect(()=>{
    const handleResize =() => setScreenSize(window.innerWidth)
    window.addEventListener('resize' , handleResize)
    handleResize();
    return () => window.removeEventListener('resize' , handleResize)
  },[])

  useEffect(()=>{
    if(screenSize <= 900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true);
    }
  },[screenSize])
  return (
    <div className='flex relative justify-between p-2 md:mx-6' >
      <NavButton tittle='menu' customfunc={()=> setActiveMenu(()=>!activeMenu)} color={currentColor}  icon={<AiOutlineMenu/>}/>
      <div className='flex' >
      <NavButton tittle='Card' 
      customfunc={()=> handleClick('card')} 
      color={currentColor} 
      icon={<FiShoppingCart/>}
      />
      <NavButton tittle='chat' 
      dotcolor='#03C9D7'
      customfunc={()=> handleClick('chat')} 
      color={currentColor}  
      icon={<BsChatLeft/>}
      />
        <NavButton tittle='Notifcation' 
      dotcolor='#03C9D7'
      customfunc={()=> handleClick('notifcation')} 
      color={currentColor}  
      icon={<RiNotification3Line/>}
      />
      <TooltipComponent content='profile' position='BottomCenter' >
        <div className='flex gap-2 items-center p-1 rounded-lg cursor-pointer hover:bg-light-gray'
        onClick={()=>handleClick('userProfile')}>
          <img src={avatar} className='w-8 h-8 rounded-full' />
          <p>
            <span className='text-gray-400 text-14'>Hi,</span>{' '}
            <span className='ml-1 font-bold text-gray-400 text-14'>Michael</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400 text-14'/>
        </div>
      </TooltipComponent>
      {isClicked.card && <Cart/> }
      {isClicked.chat && <Chat/> }
      {isClicked.userProfile && <Userprofile/> }
      {isClicked.notifcation && <Notifcation/> }
      </div>
    </div>
  )
}

export default Navbar