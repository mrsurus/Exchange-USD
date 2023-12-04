import React from 'react'
import BuySellRate from './BuySellRate'
import ExCard from './ExCard'
import PendingEx from './PendingEx'
import CompleteEx from './CompleteEx'

function RightSidebar() {
    return (
        <div className=''>
            <div>
                <BuySellRate></BuySellRate>
            </div>
            <div>
                <PendingEx></PendingEx>
                <CompleteEx></CompleteEx>
            </div>
        </div>
    )
}

export default RightSidebar