import React from 'react'
import Linechart from './Linechart'

const DashHome = () => {
  return (
    <div className='p-8'>
      <div className='flex items-center justify-center md:px-12 sm:justify-between flex-wrap'>
        <div className='border pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Today's sales</p>
          <p className='border-b pb-2'>total sales</p>
          <p className='p-8 text-2xl text-center'>10K</p>
        </div>
        <div className='border pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Total Items</p>
          <p className='border-b pb-2'>sold today</p>
          <p className='p-8 text-2xl text-center'>1245</p>
        </div>
        <div className='border pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Monthly sale</p>
          <p className='border-b pb-2'>October's total</p>
          <p className='p-8 text-2xl text-center'>10.1L</p>
        </div>
        <div className='border pt-3 m-2 text-left pl-8 pr-12'>
          <p className='text-xl font-semibold'>Inventory turnover ratio</p>
          <p className='border-b pb-2'>this month's</p>
          <p className='p-8 text-2xl text-center'>0.84%</p>
        </div>
      </div>

      <div>
        <Linechart />
      </div>
    </div>
  )
}

export default DashHome
