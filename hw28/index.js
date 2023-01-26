window.addEventListener('DOMContentLoaded', () => {

    function calcAvg(arr) {
        return arr.reduce((prevValue, curValue) => prevValue + curValue, 0) / arr.length; 
    }

    class Human {
        constructor({ name, surname, age }) {
            this.name = name;
            this.surname = surname;
            this.age = age;
        }

        getFullName() {
            return `${this.name} ${this.surname}`;
        }

        setFullName(fullName) {
            [this.name, this.surname] = fullName.split(' ');
        }
    }

    class Student extends Human {
        constructor({ name, surname, age, marks }) {
            super({ name, surname, age })
            this.marks = marks;
        }
        
        getAverageMark() {
            return calcAvg(this.marks);
        }

        getMinMark() {
            return Math.min(...this.marks);
        }

        getMaxMark() {
            return Math.max(...this.marks);
        }
    }

    class Teacher extends Human {
        constructor({ name, surname, age, group }) {
            super({ name, surname, age });
            this.group = group;
        }

        getListOfNamesByAverageMark() {
            return this.group.sort((a, b) => b.getAverageMark() - a.getAverageMark()).map((student) => student.getFullName());
        }

        getStudentByName(fullName) {
            return this.group.find((student) => student.getFullName() === fullName);
        }

        removeStudentByName(fullName) {
            this.group = this.group.filter((student) => student.getFullName() !== fullName);
        }

        updateStudentByName(newStudent, fullName) {
            const oldStudent = this.getStudentByName(fullName);
            const oldStudentIndex = this.group.findIndex((student) => student === oldStudent);
            this.group.splice(oldStudentIndex, 1, newStudent);
        }

        addStudent(newStudent) {
            this.group.push(newStudent);
        }

        findFakeStudents() {
            return this.group.filter((student) => {
                const studentMarks = student.marks;
                const avg = calcAvg(studentMarks);
                return avg !== student.getAverageMark();
            }).map((student) => `${student.getFullName()} ${student.marks}`).join('\n');
        }
    }

    class FakeStudent extends Student {
        #cheatMarks;
        constructor({ name, surname, age, marks }) {
            super({ name, surname, age, marks });
            this.#cheat();
        }

        #cheat() {
            const cheatCoefficient = 2;
            const maxMark = 10;
            return this.#cheatMarks = this.marks.map((mark) => {
                const cheatMark = mark * cheatCoefficient;
                return cheatMark > maxMark ? maxMark : cheatMark;
            });
        }

        getAverageMark() {
            return calcAvg(this.#cheatMarks);
        }

        getMinMark() {
            return Math.min(...this.#cheatMarks);
        }

        getMaxMark() {
            return Math.max(...this.#cheatMarks);
        }
    }

    const infoStudent1 = {
        name: 'Maureen',
        surname: 'Biologist',
        age: 18,
        marks: [10, 9, 8, 1, 10],
    }
    const infoStudent2 = {
        name: 'Teri',
        surname: 'Dactyl',
        age: 25,
        marks: [10, 9, 1, 10],
    }
    const infoStudent3 = {
        name: 'Peg',
        surname: 'Legge',
        age: 58,
        marks: [10, 9, 8, 5, 3, 7, 1, 10],
    }
    const infoStudent4 = {
        name: 'Allie',
        surname: 'Grater',
        age: 20,
        marks: [10, 9, 8, 5, 5, 1, 10],
    }
    const infoStudent5 = {
        name: 'Liz',
        surname: 'Erd',
        age: 28,
        marks: [10, 9, 8, 1, 9, 1, 1, 1, 1, 1, 10],
    }
    const infoStudent6 = {
        name: 'Constance',
        surname: 'Noring',
        age: 38,
        marks: [10, 1, 1, 10],
    }
    const infoStudent7 = {
        name: 'Lois',
        surname: 'Nominator',
        age: 58,
        marks: [5, 7, 8, 10],
    }
    const infoTeacher1 = {
        name: 'Lynn',
        surname: 'Sun',
        age: 48,
    }

    const student1 = new Student(infoStudent1);
    const student2 = new Student(infoStudent2);
    const student3 = new Student(infoStudent3);
    const student4 = new Student(infoStudent4);
    const student5 = new Student(infoStudent5);
    const student6 = new Student(infoStudent6);

    infoTeacher1.group = [student1, student2, student3, student4, student5];

    const teacher = new Teacher(infoTeacher1);
    teacher.updateStudentByName(student6, student3.getFullName);

    const fakeStudent = new FakeStudent(infoStudent7);
    teacher.addStudent(fakeStudent);
    teacher.findFakeStudents();
});