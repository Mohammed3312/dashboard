import React from 'react'
import Header from '../../components/Header';
import { ChartComponent , SeriesCollectionDirective , SeriesDirective , Inject , Legend , Category , StackingColumnSeries , Tooltip} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries , stackedPrimaryXAxis , stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/Contextprovicer';

const Stacked = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="p-10 m-4 mt-24 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
    <ChartComponent
    id='charts'
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
     chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    legendSettings={{background:'white'}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'} >
      <Inject services={[Legend , Category , StackingColumnSeries , Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item , index)=>
        <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  </div>
  )
}

export default Stacked