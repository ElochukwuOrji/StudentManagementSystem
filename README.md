# Student Management System

## Description
This project implements a simple Student Management System in JavaScript. The system allows for the addition of students, calculation of average grades, and viewing of student details.

## Features
- Add new students with their name, ID, and grades.
- Calculate the average grade for each student.
- View all students' details including their grades and average grade.

## Code Structure
The project consists of two main classes:

### 1. `Student`
- **Constructor**: Initializes a student with a name, ID, and grades (array).
- **Methods**:
  - `calculateAverage()`: Calculates the average of the student's grades.
  - `getDetails()`: Returns an object containing the student's details and average grade.

### 2. `StudentManagementSystem`
- **Constructor**: Initializes an empty array to hold students.
- **Methods**:
  - `addStudent(name, id, grades)`: Adds a new student to the system.
  - `viewStudents()`: Logs the details of all students to the console.

## Example
```javascript
const sms = new StudentManagementSystem();
sms.addStudent("Livinus", "S001", [80, 75, 92]);
sms.addStudent("Orji", "S002", [84, 78, 90]);
sms.viewStudents();
