function countStudents(students, sandwiches) {
    var count = 0;
    while (students.length > 0) {
        if (students[0] === sandwiches[0]) {
            count = 0;
            students.shift();
            sandwiches.shift();
        }
        else {
            if (++count >= students.length)
                return count;
            students.push(students.shift());
        }
    }
    return 0;
}
;
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
