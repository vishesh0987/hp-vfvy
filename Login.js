import React from 'react'
import './Style.css'
import { Link } from '@mui/material'
const Login = () => {
  return (
<>
        <div className="container-fluid bnmb">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 pt-5">
               <p className='tyu'>Login</p>
                <label htmlFor="Username" className='pt-3' >Username : </label>
                <input type="text" className='oppo py-2' placeholder='Enter your email or username' style={{width:'100%'}} name="" id="" />
                <label htmlFor="password" className='pt-3'>Password :</label>
                <input type="password" className='oppo py-2' placeholder='Enter your password' style={{width:'100%'}} name="" id="" />
                <div className="row pt-4">
                  <div className="col-md-12">
                <a href="" className='newwe mx-auto'>Forget password ?</a>

                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-12  pt-3">
                <button  className='mnmn bg-info text-white'>Log In</button>

                  </div>
                </div>
                <div className="row py-4 text-center">
                  <div className="col-md-12">

                <a className='asdf' href='/Signin' >Create new account</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
</>
    )
}

export default Login