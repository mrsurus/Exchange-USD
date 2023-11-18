import React,{ useState} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Login() {
    const {register, handleSubmit, formState: {errors} } = useForm()
    const [firebaseError, setfirebaseError] = useState('')

    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className="hero min-h-full py-24 bg-lime-300">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2">
                <div className="text-center w-2/3 mx-auto lg:text-left">
                    <h1 className="text-5xl font-bold">Exchange now</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>

                <form onSubmit={handleSubmit(handleLogin)} className="card  flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-gray-900">
                    <div className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Email</span>
                            </label>
                            <input {...register('email', { required: true })} type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Password</span>
                            </label>
                            <input {...register('password', { required: true, minLength: { value: 6, message: 'Password must be at lest 6 charecter' }, })} type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='' href="#" className=" link  text-blue-500">Forgot password?</Link>
                            </label>
                            {errors && <p className='text-red-500'>{errors.password?.message}</p>}
                            {firebaseError && <p className='text-red-500'>Error: {firebaseError?.message.slice(22, 36)}</p>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-lime-500">Login</button>
                        </div>
                        <p className='text-white'>New to Green Food? <Link to='/register' className='text-blue-400'>Sign Up</Link></p>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login