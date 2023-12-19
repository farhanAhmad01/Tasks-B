import React, { useState } from 'react'

function LoginForm() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    let validEmail = 'abc@gmail.com'
    const handleSubmit = () =>{
         let checkEmail = email.includes(validEmail)
         if(checkEmail){
             alert(`${email} email is valid Login Successfully`)
         }
         else{
            alert(`${email} email is  not valid`)
         }

    }
  return (
    <div className='form-container'>
        <form onSubmit={()=>handleSubmit()}>
            <label>Name</label>
        <input type="text" value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
        <label >Email</label>
        <input type="text" value={email} placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)}/>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default LoginForm