import React from 'react'

function Function() {
    return (
        <div>
            <form action="" className='bg-blue-600 my-5 p-5 '>
                <div className='flex gap-10 w-full justify-center'>
                    <div>
                        <p className='text-2xl font-semibold text-white m-3'>Send</p>
                        <select className="select select-primary w-full max-w-xs text-xl font-bold ">
                            <option >Game of Thrones</option>
                            <option>Lost</option>
                            <option>Breaking Bad</option>
                            <option>Walking Dead</option>
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mt-3" />
                        <div className='bg-gray-500 rounded text-white w-2/3 p-3 mt-3 rounded-e-3xl'>
                            <p>Exchange rate: 1 USD = 0.98 USD </p>
                        </div>
                    </div>
                    <div>
                    <p className='text-2xl font-semibold text-white m-3'>Receive</p>
                        <select className="select select-primary w-full max-w-xs text-xl font-bold ">
                            <option>Game of Thrones</option>
                            <option>Lost</option>
                            <option>Breaking Bad</option>
                            <option>Walking Dead</option>
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs mt-3" />
                        <div className='bg-gray-500 rounded text-white w-2/3 p-3 mt-3 rounded-e-3xl'>
                            <p>Reserved: </p>
                        </div>
                    </div>
                </div>
                <div className='flex mx-auto mt-5'>
                    <button className='btn w-32 mx-auto'>Exchange</button>
                </div>
            </form>
        </div>
    )
}

export default Function