import React from 'react';
import { customersData, customersGrid } from '../data/dummy';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import Header from '../components/Header';



const Customers = () => {
  return (
    <div className='p-2 m-2 mt-24 bg-white rounded-3xl md:m-10 md:p-10'>
    < Header category='Page' title='Customers' />
    <GridComponent
    dataSource={customersData}
    allowPaging
    allowSorting
    toolbar={['Delete']}
    editSettings={{allowDeleting:true , allowEditing:true}}
    width='auto'
    >
      <ColumnsDirective>
      {customersGrid.map((item , index)=>(
        <ColumnDirective key={index} {...item}/>
      ))}
      </ColumnsDirective>
      <Inject services={[ Page , Selection,Edit,Sort,Filter , Toolbar]} />
    </GridComponent>
  </div>
  )
}

export default Customers