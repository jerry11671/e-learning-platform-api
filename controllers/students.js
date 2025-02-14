const { UnauthenticatedError, BadRequestError } = require('../errors');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const { StatusCodes } = require('http-status-codes');



const enrollCourse = async (req, res) => {
    const { course_id } = req.params;
    const { role, id: studentId } = req.user;

    if (role !== 'student') {
        throw new UnauthenticatedError('Not a student.')
    }

    const course = await Course.findOne({ _id: course_id })
    const isExistingStudent = course.students.includes(studentId); // A check to determine if a student is already enrolled to a course.
    if (isExistingStudent) {
        throw new BadRequestError('You are already enrolled to course')
    }
    course.students.push(studentId);
    await course.save();

    res.status(StatusCodes.OK).json({ status: true, code: 200, msg: 'Course enrolled successfully', data: { course } })
}


const removeCourse = async (req, res) => {
    const { course_id } = req.params;
    const { id: studentId, role } = req.user;

    if (role !== 'student') {
        throw new UnauthenticatedError('Not a student.')
    }

    const course = await Course.findOne({ _id: course_id });

    const isExistingStudent = course.students.includes(studentId);
    if (!isExistingStudent) {
        throw new BadRequestError('You are not enrolled to this course.')
    }
    const studentIndex = course.students.indexOf(studentId);
    course.students.splice(studentIndex, 1);
    await course.save()

    res.status(StatusCodes.OK).json({ status: true, code: 200, msg: 'Course removed successfully' });
}




module.exports = { enrollCourse, removeCourse }