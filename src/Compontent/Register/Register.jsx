import React , { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Joi from 'joi';
import { Helmet } from 'react-helmet';

export default function Register() {
  
  let navigate = useNavigate();
  const [errorList, seterrorList] = useState([])
  const [isLoading, setisLoading] = useState(false);
const [error, setError] = useState('');
const [user, setUser] = useState({
  first_name:'',
  last_name:'',
  email:'',
  password:'',
})
function getUserDate(eventInfo){
  let myUser={...user};
  myUser[eventInfo.target.name]=eventInfo.target.value;
  setUser(myUser);
  console.log(myUser);
}

async function sendRegisterDateToApi(){
let {data} =  await axios.post(`https://sticky-note-fe.vercel.app/signup`,user);
if(data.message==='success'){
  setisLoading(false);
  navigate('/login');
}
else{
  setisLoading(false);
  setError(data.message)
}
}
function submitRegisterForm(e)
{
  e.preventDefault();
  setisLoading(true);
  let validation = validateRegisterForm();
  if(validation.error)
  {
    setisLoading(false);
    seterrorList(validation.error.details)
  }
  else{
    sendRegisterDateToApi();

  }
}
function validateRegisterForm(){
  let scheme= Joi.object({
    first_name:Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
   last_name:Joi.string().min(3).max(10).required(),
   email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
   password:Joi.string().pattern(/^[A-Z][a-z]{3,6}/),

  });
  return scheme.validate(user,{abortEarly:false});
}
return(
<>
<Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>Register Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
{
  errorList.map((err,index)=>{
    if(err.context.label==='password')
    {
      return <div key={index} className=" alert alert-danger my-2">Password invalid</div>
    }
    else{
      return <div key={index} className=" alert alert-danger my-2">{err.message}</div>

    }
  })
}


{ error ? (<div className=' alert alert-danger my-2'>{error}</div>):("")}

  <form onSubmit={submitRegisterForm}>

<label htmlFor='first_name' className='ms-5 mt-5'>First_name :</label>
<input onChange={getUserDate} type="text" className=' form-control my-input my-2 w-50 ms-5 ' name="first_name" id="first_name"></input>
<label htmlFor='last_name' className='ms-5 ' >Last_name :</label>
<input onChange={getUserDate}  type="text" className=' form-control  my-input my-2 w-50 ms-5 ' name="last_name" id="last_name"></input>
<label htmlFor='email' className='ms-5 '>email:</label>
<input onChange={getUserDate} type="email" className=' form-control my-input my-2 w-50 ms-5' name="email" id="email"></input>
<label htmlFor='password' className='ms-5 ' >password :</label>
<input onChange={getUserDate} type="password" className=' form-control my-input my-1 w-50 ms-5' name="password" id="password"></input>
<Link  to='/login'>
<button type='submit' className=' btn btn-outline-info ms-5'>{isLoading===true?<i className=' fas fa-spinner fa-spin'></i>:'Register'}</button> 
</Link>
  </form>
</>
)}


