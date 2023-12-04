import React from 'react'
import Discription from './Discription'
import BuySellRate from './BuySellRate'
import LeftSidebar from './LeftSidebar'
import Function from './Function'
import RightSidebar from './RightSidebar'
import UserReview from './UserReview'

function Home() {
  return (
    <div>
      <Discription></Discription>
      <Function></Function>
      <div className='grid gap-10 grid-cols-12 px-10'>
        <div className=' col-span-4'>
          <LeftSidebar></LeftSidebar>
        </div>
        <div className='col-span-8'>
          <RightSidebar></RightSidebar>
        </div>
      </div>
      <div>
        <UserReview></UserReview>
      </div>
    </div>
  )
}

export default Home