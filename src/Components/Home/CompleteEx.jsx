import React from 'react'
import ExCard from './ExCard'

function CompleteEx() {
    return (
        <div className='mt-10'>
            <div className=' bg-blue-500 mb-1'>
                <p className=' text-white font-bold text-lg text-center p-2'>Complete ExChange</p>
            </div>
            <div>
                <ExCard></ExCard>
            </div>
        </div>
    )
}

export default CompleteEx