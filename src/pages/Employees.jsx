import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject , Search , Toolbar} from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import Header from '../components/Header';


const Employees = () => {
  return (
    <div className='p-2 m-2 mt-24 bg-white rounded-3xl md:m-10 md:p-10'>
      < Header category='Page' title='Employees' />
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width='auto'
      >
        <ColumnsDirective>
        {employeesGrid.map((item , index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[ Page  , Search , Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees