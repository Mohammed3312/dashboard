import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import Stacked from '../components/charts/Stacked';
import Pie from '../components/charts/Pie';
import Button from '../components/Button';
import SparkLine from '../components/charts/SparkLine';
import { earningData , SparklineAreaData , ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../context/Contextprovicer';

const Ecommers = () => {
  const {currentColor} =useStateContext();
  return (
<div className="mt-24">
      <div className="flex flex-wrap justify-center lg:flex-nowrap">
        <div className="p-8 pt-9 m-3 w-full h-full bg-white bg-center bg-no-repeat bg-cover rounded-xl dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-9/12 bg-hero-pattern">
        <div className="flex justify-between items-center">
        <div className='mt-32'>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>
        </div>
        <div className='mt-8'>
        <Button color='white' bgcolor={currentColor}  text='Dwonload' borderRadius='10px' size='md' />
        </div>
    </div>
    </div>
    <div className='flex flex-wrap gap-1 justify-center items-center m-3'>
      {earningData.map((item)=>(
        <div
        key={item.title} className='p-4 pt-9 bg-white rounded-2xl dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56' 
        >
          <button type='button'
          style={{color:item.iconColor, backgroundColor:item.iconBg}}
          className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
              {item.icon}
          </button>
          <p className='mt-3'>
            <span className='text-lg font-semibold'>
              {item.amount}
            </span>
            <span className={`text-sm text-${item.pcColor} ml-2`}>
              {item.percentage}
            </span>
          </p>
          <p className='mt-1 text-sm text-gray-400'>{item.title}</p>
        </div>
      ))}
    </div>
    <div className='flex flex-wrap gap-10 justify-center'>
      <div className='p-4 m-3 bg-white rounded-2xl dark:text-gray-200 dark:bg-secondary-dark-bg md:w-780'>
        <div className='flex justify-between'>
        <p className='text-xl font-semibold'>Revenue Updates</p>
        <div className='flex gap-4 items-center'>
          <p className='flex gap-2 items-center text-gray-600 hover:drop-shadow-xl'>
            <span><GoPrimitiveDot/></span>
            <span>Expense</span>
          </p>
          <p className='flex gap-2 items-center text-green-400 hover:drop-shadow-xl'>
            <span><GoPrimitiveDot/></span>
            <span>Budget</span>
          </p>
        </div>
        </div>
        <div className='flex flex-wrap gap-10 justify-center mt-10'>
          <div className='pr-10 m-4 border-r-1 border-color'>
            <div>
              <p>
                <span className='text-3xl font-semibold'>$93,438</span>
                <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
              </p> 
              <p className='mt-1 text-gray-500'>
                Budget
              </p>
            </div>
            <div className='mt-8'>
              <p>
                <span className='text-3xl font-semibold'>$48,438</span>
              </p>
              <p className='mt-1 text-gray-500'>
                Expense
              </p>
            </div>
            <div className='mt-5'>
            <SparkLine 
            currentColor={currentColor} 
            id='line-sparkline'
            type='Line'
            height='80px'
            width='250px'
            data={SparklineAreaData}
            color={currentColor} />
            </div>
            <div className='mt-10'>
              <Button color='white' 
              bgcolor={currentColor} 
              text='Download Report' 
              borderRadius='10px' />
            </div>
          </div>
          <div>
            <Stacked width='320px' height='360px'/>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Ecommers