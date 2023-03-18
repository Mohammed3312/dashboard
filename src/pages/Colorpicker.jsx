import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import Header from '../components/Header';

const changeColor = (c)=>{
document.getElementById('preview').style.backgroundColor = c.currentValue.hex
}

const Colorpicker = () => {
  return (
    <div className='p-2 m-2 mt-24 bg-white rounded-3xl md:m-10 md:p-10'>
      <Header category='App' title='Color picker' />
      <div className='text-center'>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900'>change pen Color</p>
        <div  id='preview'/>
        <div className='flex flex-wrap gap-20 justify-center items-center'>
          <div>
            <p className='mt-2 mb-4 text-2xl font-semibold'> Pallete</p>
            <ColorPickerComponent
            id='inline-pallete'
            mode='Palette'
            change={changeColor}
            />
          </div>
          <div>
            <p className='mt-2 mb-4 text-2xl font-semibold'>Inline picker</p>
            <ColorPickerComponent
            id='inline-picker'
            mode='picker'
            change={changeColor}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Colorpicker