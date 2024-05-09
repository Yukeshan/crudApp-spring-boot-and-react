
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ListCourseComponent from './components/ListCourseComponent'
import ListStudentComponent from './components/ListStudentComponent'
import ListStudentComponentAdmin from './components/ListStudentComponentAdmin'
import ListTeacherComponent from './components/ListTeacherComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ListTeacherComponentAdmin from './components/ListTeacherComponentAdmin'
import ListCourseComponentAdmin from './components/ListCourseComponentAdmin'
import StudentComponent from './components/StudentComponent'
import TeacherComponent from './components/TeacherComponent'
import CourseComponent from './components/CourseComponent'
import img from './components/returnImg'


function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path="/" element={<ListCourseComponent />  } />
        
        {/* http://localhost:3000/students */}
        <Route path="/students/" element={<ListStudentComponent />} />
        {/* http://localhost:3000/teachers */}
        <Route path="/teachers/" element={<ListTeacherComponent />} />
        {/* http://localhost:3000/courses */}
        <Route path="/courses/" element={<ListCourseComponent />} />
        
        {/* http://localhost:3000/admin */}
        <Route path="/admin/" element={<AdminRoutes />} />
        
        {/* http://localhost:3000/add-student */}
        <Route path="/add-student/" element={<StudentComponent />} />
        {/* http://localhost:3000/add-teacher */}
        <Route path="/add-teacher/" element={<TeacherComponent />} />
        {/* http://localhost:3000/add-course */}
        <Route path="/add-course/" element={<CourseComponent />} />


        {/* http://localhost:3000/update-student */}
        <Route path="/update-student/:id" element={<StudentComponent />} />
        {/* http://localhost:3000/update-teacher */}
        <Route path="/update-teacher/:id" element={<TeacherComponent />} />
        {/* http://localhost:3000/update-course */}
        <Route path="/update-course/:id" element={<CourseComponent />} />




      </Routes>
    </BrowserRouter>
  );
}

// Define a separate component for admin routes
function AdminRoutes() {
  return (
    <>
      <ListStudentComponentAdmin />
      <ListTeacherComponentAdmin />
      <ListCourseComponentAdmin />
    </>
  );
}






export default App;