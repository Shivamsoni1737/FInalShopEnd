import React from 'react'
import BarChart from './BarChart'
import Linechart from './Linechart'

const DashHome = () => {
  return (
    <div className='p-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center'>
        <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Today's sales</p>
          <p className='border-b pb-2'>total sales</p>
          <p className='p-8 text-2xl text-center'>10K</p>
        </div>
        <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Total Items</p>
          <p className='border-b pb-2'>sold today</p>
          <p className='p-8 text-2xl text-center'>1245</p>
        </div>
        <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Monthly sale</p>
          <p className='border-b pb-2'>October's total</p>
          <p className='p-8 text-2xl text-center'>10.1L</p>
        </div>
        <div className='col-span-1 border shadow-lg rounded-md pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Inventory turnover ratio</p>
          <p className='border-b pb-2'>this month's</p>
          <p className='p-8 text-2xl text-center'>0.84%</p>
        </div>
      </div>

      <div className='grid grid-cols-1 mt-12 md:grid-cols-2 gap-6'>
        <Linechart />
        <BarChart />
      </div>
    </div>
  )
}

export default DashHome
