import React, {
    // useContext,
     useState
    } from 'react'
import {
     Link, 
    //  Navigate
     } from "react-router-dom"
// import axios from "axios"
// import { UserContext } from '../../userContext'

const Login = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
//   const [ redirect, setRedirect ] = useState(false)
//   const {setUser} = useContext(UserContext)

//   const loginUser = async (e) => {
//     e.preventDefault()
//     try {  
//       const {data} = await axios.post('/login', {email, password}, {withCredentials: true});
//       setUser(data)
//       alert("login successful")
//       setRedirect(true)
//     } catch (error) {
//       console.log(error)
//       alert("login failed. try again")
//     }
//   }

//   if(redirect) {
//     return <Navigate to ={'/'} />
//   }
  

  return (
    <div className='mt-4 grow flex items-center justify-around'>
    <div className="-mb-64">
    <h2 className='text-4xl text-center'>Login</h2>
        <form className='max-w-md mx-auto border border-none' >
        <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <button className='primary'>login</button>
            <div className="text-center py-2 text-gray-500">
                No account yet?.. 
                <Link to={"/"} className="text-gray-600 font-bold underline "> 
                Register Now
                </Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login