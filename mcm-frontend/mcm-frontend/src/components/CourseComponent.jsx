import React, { useEffect, useState } from 'react'
import { createCourse, getCourse, updateCourse } from '../services/courseService'
import { useNavigate,useParams } from 'react-router-dom'

const CourseComponent = () => {


  const[courseName,setCourseName] = useState('')
  const[duration,setDuration] = useState('')
  const[teacher,setTeacher] = useState('')

  const {id} = useParams();

  
  const [errors,setErrors] = useState({
    courseName:'',
    duration:'',
    teacher:''
  })


  const navigator = useNavigate('')

  useEffect(()=>{
    if(id){
      getCourse(id).then((response)=>{
        setCourseName(response.data.courseName);
        setDuration(response.data.duration);
        setTeacher(response.data.teacher);
      }).catch(error => {
        console.log(error);
      })
    }
  },[])

  function handleCourseName(e){
    setCourseName(e.target.value)
  }

  function handleDuration(e){
    setDuration(e.target.value)
  }

  function handleTeacher(e){
    setTeacher(e.target.value)
  }

  function saveOrUpdateCourse(e){
    e.preventDefault();

    if(validateForm()){
      const course = {courseName,duration,teacher}
      console.log(course);

      if(id){
        updateCourse(id,course).then((response)=>{
          console.log(response.data)
          navigator('/admin')
        }).catch(error =>{
          console.log(error)
        })

      }else{
        createCourse(course).then((response)=>{
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

    if(courseName.trim()){
        errorsCopy.courseName = '';
    } else {
        errorsCopy.courseName = 'Course name is required';
        valid = false;
    }

    if(duration.trim()){
        errorsCopy.duration = '';
    } else {
        errorsCopy.duration = 'Duration is required';
        valid = false;
    }

    if(teacher.trim()){
        errorsCopy.teacher = '';
    } else {
        errorsCopy.teacher = 'Teacher name is required';
        valid = false;
    }

    setErrors(errorsCopy);
    
    return valid;

}

function pageTitle(){
  if(id){
      return <h2 className='text-center'>Update Course</h2>
  }else{
      return <h2 className='text-center'>Add Course</h2>
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
                <label className='fore-label'>Course name</label>
                <input 
                type="text"
                placeholder='Enter Course name'
                name='courseName'
                value={courseName}
                className={`form-control ${ errors.courseName ? 'is-invalid': '' }`}
                onChange={handleCourseName} />
                { errors.courseName && <div className='invalid-feedback'> { errors.courseName} </div> }
                </div>

              <div className='fore-group mb-2'>
                <label className='fore-label'>Duration</label>
                <input 
                type="text"
                placeholder='Enter Course duration'
                name='duration'
                value={duration}
                className={`form-control ${ errors.duration ? 'is-invalid': '' }`}
                onChange={handleDuration} />
                { errors.duration && <div className='invalid-feedback'> { errors.duration} </div> }

              </div>

              <div className='fore-group mb-2'>
                <label className='fore-label'>Teacher</label>
                <input 
                type="text"
                placeholder='Enter Teacher name'
                name='teacher'
                value={teacher}
                className={`form-control ${ errors.teacher ? 'is-invalid': '' }`}
                onChange={handleTeacher} />
                { errors.teacher && <div className='invalid-feedback'> { errors.teacher} </div> }
              </div>
              <button className='btn btn-success' onClick={saveOrUpdateCourse}>Submit</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CourseComponent