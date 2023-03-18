import React from 'react';
import { pieChartData } from '../../data/dummy';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../context/Contextprovicer';
import Header from '../../components/Header';


// const dataa = {id="chart-pie", data={pieChartData} ,legendVisiblity, height="full"}






const Pie = () => {
  const {currentMode} = useStateContext();
  return (
    <div className="p-10 m-4 mt-24 bg-white rounded-3xl md:m-10 dark:bg-secondary-dark-bg">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
    <AccumulationChartComponent
id="chart-pie"
legendSettings={{  background: 'white' }}
height="full"
background={currentMode === 'Dark' ? '#33373E' : '#fff'}
tooltip={{ enable: true }}
>
<Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
<AccumulationSeriesCollectionDirective>
  <AccumulationSeriesDirective
    name="Sale"
    dataSource={pieChartData}
    xName="x"
    yName="y"
    innerRadius="40%"
    startAngle={0}
    endAngle={360}
    radius="70%"
    explode
    explodeOffset="10%"
    explodeIndex={2}
    dataLabel={{
      visible: true,
      name: 'text',
      position: 'Inside',
      font: {
        fontWeight: '600',
        color: '#fff',
      },
    }}
  />
</AccumulationSeriesCollectionDirective>
</AccumulationChartComponent> 

    </div>
  </div>
  )
}

export default Pie