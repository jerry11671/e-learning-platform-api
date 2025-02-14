const express = require('express');
const router = express.Router()

const { getCourses, createCourse, updateCourse, deleteCourse, enrollStudent, updateStudent, removeStudent } = require('../controllers/courses')


router.get('/', getCourses);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);
router.post('/:course_id/enroll', enrollStudent);
// router.put('/update-student/:student_id', updateCourseStudent);
router.delete('/:course_id/students/:student_id', removeStudent);




module.exports = router;    