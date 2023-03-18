import React from 'react'
import Header from '../../components/Header'
import Linechart from '../../components/charts/Linechart'


const Line = () => {
  return (
    <div className='p-10 m-4 mt-24 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Inflation Rate' />
      <div className='w-full'>
        <Linechart />
      </div>
    </div>
  )
}

export default Line