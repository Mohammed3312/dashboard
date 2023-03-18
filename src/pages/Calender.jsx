import React from 'react'
import { ScheduleComponent ,    Day , Week , WorkWeek , Month , Agenda ,Inject , Resize , DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import Header from '../components/Header';

const Calender = () => {
  return (
    <div className='p-2 m-2 mt-24 bg-white rounded-3xl md:m-10 md:p-10'>
      <Header category='App' title='Calender' />
      <ScheduleComponent height='650px'
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2021, 0 ,10)} >
        <Inject services={[Day ,Week , WorkWeek ,Month, Agenda , Resize , DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calender