import React from 'react'
import { KanbanComponent, ColumnDirective ,ColumnsDirective} from '@syncfusion/ej2-react-kanban'
import { kanbanData , kanbanGrid  } from '../data/dummy'
import Header from '../components/Header'

const Kanban = () => {
  return (
    <div className='p-2 m-2 mt-24 bg-white rounded-3xl md:m-10 md:p-10'>
      <Header category='App' title='Kanban' />
      <KanbanComponent
      id='kanban'
      dataSource={kanbanData}
      cardSettings={{contentField:'Sumary' , headerField:'Id'}}
      keyField='Status'
       >
        <ColumnsDirective>
        {kanbanGrid.map((item , index)=>
        <ColumnDirective key={index} {...item}/> )}
        </ColumnsDirective>
      </KanbanComponent>
      </div>
  )
}

export default Kanban