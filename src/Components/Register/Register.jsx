import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Register() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const [mainError, setMainError] = useState(null)

    const handleSignUp = data => {
        console.log(data)
    }
    return (
        <div>
            <div className="hero  bg-lime-300">
                <div className="hero-content w-full py-12 md:w-2/5 ">
                    <div className="card flex-shrink-0 w-full   shadow-2xl bg-gray-900 pt-10">
                        <h1 className="text-5xl font-bold text-center text-white">Sign Up </h1>
                        <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Name</span>
                                </label>
                                <input {...register('name', { required: 'name is required' })} type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Email</span>
                                </label>
                                <input {...register('email', { required: true })} type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white">Password</span>
                                </label>
                                <input {...register('password', { required: true, minLength: { value: 6, message: 'Password must be at lest 6 charectar' } })} type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <p className='text-red-500'>{errors.password?.message}</p>
                            <div className="form-control mt-6">
                                {
                                    mainError && <p className='text-red-500'>Error: {mainError?.messagess?.slice(22, 42)}</p>

                                }
                                <input className='btn bg-lime-500 ' type="submit" value="Sign Up" />
                            </div>
                            <p className='text-center text-white'>Already have an account? <Link className='text-success font-bold' to='/login'>Log In</Link></p>

                        </form>
                        <button  className='btn btn-primary mt-5 mx-8 mb-5'>Login With Google</button>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register