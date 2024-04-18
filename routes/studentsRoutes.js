const express = require("express");
const router = express.Router();

const {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
    getStudent,
} = require("../controllers/studentController");

// Define routes for the root path
router.route("/")
    .get(getStudents)       // GET all students
    .post(createStudent);   // POST to create a new student

// Define routes for paths with an ID
router.route("/:id")
    .get(getStudent)        // GET a single student by ID
    .put(updateStudent)     // PUT to update a student by ID
    .delete(deleteStudent); // DELETE a student by ID

module.exports = router;
