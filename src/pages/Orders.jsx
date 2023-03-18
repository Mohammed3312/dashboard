import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../data/dummy';
import Header from '../components/Header'

const Orders = () => {
  return (
    
    <div className='p-2 m-2 mt-24 bg-white rounded-3xl md:m-10 md:p-10'>
      < Header category='Page' title='Orders' />
      <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowPaging
      allowSorting
      >
        <ColumnsDirective>
        {ordersGrid.map((item , index)=>(
          <ColumnDirective key={index} {...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[Resize , Sort , Filter , Page , ExcelExport , Edit , PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders