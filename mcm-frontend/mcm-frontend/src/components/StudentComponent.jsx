import React, { useEffect, useState } from 'react'
import { createStudent, getStudent, updateStudent } from '../services/studentService'
import { useNavigate,useParams } from 'react-router-dom'

const StudentComponent = () => {

  const[firstName,setFirstName] = useState('')
  const[lastName,setLastName] = useState('')
  const[email,setEmail] = useState('')

  const {id} = useParams();

  const [errors,setErrors] = useState({
    firstName:'',
    lastName:'',
    email:''
  })

  const navigator = useNavigate('')

  useEffect(()=>{
    if(id){
      getStudent(id).then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      }).catch(error => {
        console.log(error);
      })
    }
  },[])

  function handleFirstName(e){
    setFirstName(e.target.value)
  }

  function handleLastName(e){
    setLastName(e.target.value)
  }

  function handleEmail(e){
    setEmail(e.target.value)
  }

  function saveOrUpdateStudent(e){
    e.preventDefault();


    if(validateForm()){
      const student = {firstName,lastName,email}
      console.log(student);


      

      if(id){
        updateStudent(id,student).then((response)=>{
          console.log(response.data)
          navigator('/admin')
        }).catch(error =>{
          console.log(error)
        })

      }else{
        createStudent(student).then((response)=>{
          console.log(response.data);
          navigator('/admin')
        }).catch(error =>{
          console.log(error);
        })
      }

    }
    
  }

  function validateForm(){
    let valid = true;

    const errorsCopy = {... errors}

    if(firstName.trim()){
        errorsCopy.firstName = '';
    } else {
        errorsCopy.firstName = 'First name is required';
        valid = false;
    }

    if(lastName.trim()){
        errorsCopy.lastName = '';
    } else {
        errorsCopy.lastName = 'Last name is required';
        valid = false;
    }

    if(email.trim()){
        errorsCopy.email = '';
    } else {
        errorsCopy.email = 'Email is required';
        valid = false;
    }

    setErrors(errorsCopy);
    
    return valid;

}
function pageTitle(){
  if(id){
      return <h2 className='text-center'>Update Student</h2>
  }else{
      return <h2 className='text-center'>Add Student</h2>
  }
}

  return (
    <div className='container'>
      <br /><br />
      <div className='row'>
        <div className='card'>
          {
            pageTitle()
          }
          <div className='card-body'>
            <form >
              <div className='fore-group mb-2'>
                <label className='fore-label'>First name</label>
                <input 
                type="text"
                placeholder='Enter Student First name'
                name='firstName'
                value={firstName}
                className={`form-control ${ errors.firstName ? 'is-invalid': '' }`}
                onChange={handleFirstName} />
                { errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div> }

              </div>
              <div className='fore-group mb-2'>
                <label className='fore-label'>Last name</label>
                <input 
                type="text"
                placeholder='Enter Student Last name'
                name='lastName'
                value={lastName}
                className={`form-control ${ errors.lastName ? 'is-invalid': '' }`}
                onChange={handleLastName} />
                { errors.lastName && <div className='invalid-feedback'> { errors.lastName} </div> }

              </div>

              <div className='fore-group mb-2'>
                <label className='fore-label'>Email</label>
                <input 
                type="text"
                placeholder='Enter Student Email'
                name='email'
                value={email}
                className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                onChange={handleEmail} />
                { errors.email && <div className='invalid-feedback'> { errors.email} </div> }

              </div>
              <button className='btn btn-success' onClick={saveOrUpdateStudent}>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default StudentComponent