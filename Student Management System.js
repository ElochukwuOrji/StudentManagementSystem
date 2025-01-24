class Student {
    constructor(name, id, grades) {
        this.name = name;
        this.id = id;
        this.grades = grades; //Array of grades
    }
    // Method to calculate average grade
    calculateAverage() {
        const total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }
    // Method to get student details
    getDetails() {
        return {
            name: this.name,
            id: this.id,
            grades: this.grades,
            average: this.calculateAverage(),
        };
    }
}
class StudentManagementSystem {
    constructor() {
        this.students = []; // Array to hold students
    }
    // Method to add a new student
    addStudent (name, id, grades) {
        const student = new Student(name, id, grades);
        this.students.push(student);
        console.log(`Student ${name} added successfully`);
    }
    // Method to view all students
    viewStudents() {
        this.students.forEach(students => {
            const details = students.getDetails();
            console.log(`Name: ${details.name}, ID: ${details.id}, Grades: ${details.grades}, Average: ${details.average.toFixed(2)}`);

        });

    }

}
// Example
const sms = new StudentManagementSystem();
sms.addStudent("Livinus", "S001", [80, 75, 92]);
sms.addStudent("Orji", "S002", [84, 78, 90]);
sms.viewStudents();