"use strict";
function assignGrade(average) {
    // 평균 점수를 매개변수로 받기 / 학점을 문자열('A',..)로 리턴
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
function calculateAverage(student) {
    // Student라는 타입의 객체를 받아서 평균 계산
    const sum = student.scores.korean +
        student.scores.math +
        student.scores.society +
        student.scores.science +
        student.scores.english;
    const average = sum / Object.keys(student.scores).length;
    return average;
}
function createStudent(//  Student를 생성하는 함수
name, age, korean, math, society, science, english) {
    return {
        name, // 단축속성명으로 축약
        age,
        scores: {
            korean,
            math,
            society,
            science,
            english,
        },
    };
}
function printResult(student) {
    const average = calculateAverage(student); // 평균을 계산
    const grade = assignGrade(average); // 계산된 평균을 기준으로 학점을 추출
    console.log(`${student.name} (${student.age}세) - 평균: ${average.toFixed(2)}, 학점: ${grade}`);
}
function main() {
    const spartan = createStudent("Spartan", 30, 95, 89, 76, 90, 97);
    printResult(spartan);
}
main();
