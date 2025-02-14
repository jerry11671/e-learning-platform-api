const express = require('express');
const router = express.Router()

const { enrollCourse, updateEnrollment, removeCourse } = require('../controllers/students');



router.post('/:course_id/enroll-course', enrollCourse);
router.put('/:course_id/update', updateEnrollment);
router.delete('/:course_id/remove-course', removeCourse);



module.exports = router;