import React from 'react'
import { ChartComponent , SeriesCollectionDirective, SeriesDirective, Inject ,DateTime, Legend, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries , areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/Contextprovicer'
import Header from '../../components/Header'


const Area = () => {
  const{currentMode}=useStateContext();
  return (
    <div>
    <div className='p-10 m-4 mt-24 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg'>
    <Header category='Chart' title='Inflation Rate' />
    
    <ChartComponent 
    id='area-chart'
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border:{width:0}}}
    background={currentMode === 'Dark'?'#33373E' :'#fff'}
    legendSettings={{ background: 'white' }}
    >
      <Inject services={[SplineAreaSeries , DateTime,Legend]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item,index)=>(
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
    </div>
  )
}

export default Area