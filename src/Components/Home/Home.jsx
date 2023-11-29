import React from 'react'
import Discription from './Discription'
import BuySellRate from './BuySellRate'
import LeftSidebar from './LeftSidebar'
import Function from './Function'

function Home() {
  return (
    <div>
      <Discription></Discription>
      <Function></Function>
      <div className='grid gap-5 grid-cols-12'>
        <div className=' col-span-8'>
          <BuySellRate></BuySellRate>
        </div>
        <div className='col-span-4'>
          <LeftSidebar></LeftSidebar>
        </div>
      </div>
    </div>
  )
}

export default Home