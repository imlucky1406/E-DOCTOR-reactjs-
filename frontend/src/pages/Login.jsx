import React, { useState } from 'react'

export const Login = () => {

  const [state, setstate] = useState('Sign Up')

  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [name, setname] = useState('')

  const onSubmitHandler = async (event)=>{
      event.preventDefault()


  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "SIGN UP" :"LOGIN"} to book appointment</p>
        {
          state === "Sign Up" &&
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setname(e.target.name)} value={name} />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setemail(e.target.name)} value={name} />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setpassword(e.target.name)} value={name} />
        </div>

        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>
          {state == 'Sign Up' ? "Create Account" : "Login"}
        </button>

          {state === 'Sign Up' 
          ? <p>Already have an account? <span onClick={()=>setstate('Login')} className='text-primary underline cursor-pointer'>Login Here</span></p>
          : <p>Create an new account? <span onClick={()=>setstate('Sign Up')} className='text-primary underline cursor-pointer'>Click Here</span></p> 
          }
        
      </div>
    </form>
  )
}
