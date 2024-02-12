import React from 'react'
import './Style.css'

const Signin = () => {
  return (
    <>
    <div className="container-fluid bhyu">
      <div className="container py-5 ">
        <div className="row py-3 d-flex justify-content-center">
          <div className="col-md-6">
            <div className="row">
              <h1 className='text-dark pb-4'>Sign Up</h1>
              <div className="col-md-6">
              <label htmlFor="">First Name :</label>
    <input type="text" name="" className='oppo' id="" style={{width:'100%'}} placeholder='First Name' />
    
              </div>
              <div className="col-md-6">
              <label htmlFor="">Last Name :</label>
    <input type="text" className='oppo' name="" style={{width:'100%'}} id="" placeholder='Last Name' />
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-3 d-flex justify-content-center">
          <div className="col-md-6">
<label htmlFor="">Email :</label>
<input type="text" className='oppo' placeholder='Enter Your Email' style={{width:'100%'}} name="" id="" />
          </div>
        </div>
<div className="row pb-3 d-flex justify-content-center">
  <div className="col-md-6">
    <label htmlFor="">Mobile Number :</label>
    <input type="text" className='oppo' placeholder='Mobile Number' style={{width:'100%'}} name="" id="" />
  </div>
</div>
<div className="row pb-3 d-flex justify-content-center">
  <div className="col-md-6">
    <label htmlFor="">Password :</label>
    <input type="password" className='oppo' style={{width:'100%'}} placeholder='Enter Your Password' />
  </div>
</div>
<div className="row pb-3 d-flex justify-content-center">
  <div className="col-md-6">
    <label htmlFor="">Confirm Password :</label>
    <input type="password" className='oppo' style={{width:'100%'}}  placeholder='Re - Enter Your Password' />
  </div>
</div>
<div className="row">
  <div className="col-md-12 py-3 d-flex justify-content-center">
<input type="checkbox" className='chec' /> <p> I accept the Terms of Uses & Privacy Policy </p>
</div>
  </div>
<div className="row ">

<div className="col-md-12 d-flex justify-content-center">

    <button className='vvv bg-info'>Sign Up</button>
</div>
</div>
<div className="row py-3">
  <div className="col-md-12 d-flex justify-content-center">
  <p>  Already Have An Account? </p><a href="/Login">Login here</a>
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default Signin