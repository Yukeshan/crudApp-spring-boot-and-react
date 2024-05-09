import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/courses';

export const listCourses =()=> axios.get(REST_API_BASE_URL);

export const createCourse = (course) => axios.post(REST_API_BASE_URL,course)

export const getCourse = (courseid) => axios.get(REST_API_BASE_URL+'/'+courseid);

export const updateCourse = (courseid,course) => axios.put(REST_API_BASE_URL+'/'+courseid,course);

export const deleteCourse = (courseid) => axios.delete(REST_API_BASE_URL+'/'+courseid);
