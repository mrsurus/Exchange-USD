import React from 'react'

function LeftSidebar() {
    return (
        <div className=''>
            <div className=' bg-gray-300 rounded min-w-32 p-5'>
                <form className='my-3 w-4/5 mx-auto'>
                    <div className="form-control">
                        <p className='font-semibold text-2xl'>Tract Your Exchange</p> 
                        <div className='divider'></div>
                        <input type="text" placeholder="Exchange ID" className="input input-bordered" />
                        <button className='mt-3 w-1/3 mx-auto btn-primary btn text-white'>Track</button>
                    </div>
                </form>
            </div>
                        {/* our reserve section */}

            <div className='bg-blue-600 p-5 mt-5'>
                <div className=' bg-black rounded '>
                    <p className=' text-white font-bold text-lg p-2 text-center'>Our Reserve</p>
                </div>
                <div className='bg-white flex gap-2 mt-2 p-2 rounded  '>
                    <div className="avatar m-2">
                        <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className='text-left'>
                        <p className='font-bold'>Pyoneer USD</p>
                        <p className=''>315 USD</p>
                    </div>
                </div>
                <div className='bg-white flex gap-2 mt-2 p-2 rounded  '>
                    <div className="avatar m-2">
                        <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className='text-left'>
                        <p className='font-bold'>WebMoney USD</p>
                        <p className=''>315 USD</p>
                    </div>
                </div>
                <div className='bg-white flex gap-2 mt-2 p-2 rounded  '>
                    <div className="avatar m-2">
                        <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <div className='text-left'>
                        <p className='font-bold'>PerfectMoney USD</p>
                        <p className=''>315 USD</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default LeftSidebar