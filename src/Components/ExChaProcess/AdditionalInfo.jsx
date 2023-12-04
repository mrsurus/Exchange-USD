import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { TiInfoLarge } from "react-icons/ti";
import { LuRefreshCcw } from "react-icons/lu";

function AdditionalInfo() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [firebaseError, setfirebaseError] = useState('')

    const handleLogin = data => {
        console.log(data)
    }

    return (
        <div className='my-16'>

            <form onSubmit={handleSubmit(handleLogin)} className="card  flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-gray-900">

                <div className="card-body ">
                    <div className='flex items-center text-white font-bold text-xl '>
                        <TiInfoLarge />
                        <p>Additional Info</p>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Email</span>
                        </label>
                        <input {...register('email', { required: true })} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-white">Bkash Personal</span>
                        </label>
                        <input {...register('accountNumber', { required: true })} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">
                             <span><LuRefreshCcw />
                        </span>Process Exchange</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AdditionalInfo