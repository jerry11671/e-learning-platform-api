const express = require('express');
const router = express.Router()

const { enrollCourse, removeCourse } = require('../controllers/students');



router.post('/:course_id/enroll-course', enrollCourse)
router.delete('/:course_id/remove-course', removeCourse);



module.exports = router;