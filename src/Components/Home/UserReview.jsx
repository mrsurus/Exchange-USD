import React from 'react'
import { FaRegSmile } from "react-icons/fa";

function UserReview() {
    return (
        <div className='mt-10 bg-gray-300 p-10'>
            <div className=' bg-white mb-5'>
                <p className=' font-bold text-xl text-center p-2 text-green-500'>User Reviews</p>
            </div>
            <div className="carousel carousel-end rounded w-full ">
                <div className="carousel-item w-1/4 mr-3 bg-white rounded">
                    <div className='border p-3 w-full rounded'>
                        <div className='flex justify-center items-center gap-2 bg-green-500 font-semibold w-1/3 mx-auto text-center rounded text-white'>
                            <FaRegSmile />
                            <p>Positive</p>
                        </div>
                        <p className='font-bold text-xl my-3'>"<span>Very Fast and Best service in Bangladesh</span>"</p>
                        <p className='text-right font-semibold'>Shakawat Hossain</p>
                    </div>
                </div>
                <div className="carousel-item w-1/4 mr-3 bg-white rounded">
                    <div className='border p-3 w-full rounded'>
                        <div className='flex justify-center items-center gap-2 bg-green-500 font-semibold w-1/3 mx-auto text-center rounded text-white'>
                            <FaRegSmile />
                            <p>Positive</p>
                        </div>
                        <p className='font-bold text-xl my-3'>"<span>Very Fast and Best service in Bangladesh</span>"</p>
                        <p className='text-right font-semibold'>Shakawat Hossain</p>
                    </div>
                </div>
                <div className="carousel-item w-1/4 mr-3 bg-white rounded">
                    <div className='border p-3 w-full rounded'>
                        <div className='flex justify-center items-center gap-2 bg-green-500 font-semibold w-1/3 mx-auto text-center rounded text-white'>
                            <FaRegSmile />
                            <p>Positive</p>
                        </div>
                        <p className='font-bold text-xl my-3'>"<span>Very Fast and Best service in Bangladesh</span>"</p>
                        <p className='text-right font-semibold'>Shakawat Hossain</p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default UserReview