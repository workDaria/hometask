"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
let Students = class Students {
    constructor() {
        this.exams = 15;
        this.info = {
            subject: 'English',
            class: 9,
        };
        this.marks = {
            marksFirstGoup: [5, 4, 3, 5, 3],
            marksSecondGoup: [5, 2, 1, 3, 4]
        };
    }
    getStudentsInfo() {
        return {
            exams: this.exams,
            info: this.info,
            marks: this.marks,
        };
    }
};
Students = __decorate([
    calculateStudyHours([2, 3, 5, 6, 6]) // считает количество учебных часов в неделю
    ,
    setEnglishLevel(interfaces_1.languageLevel.advanced) //  уровень студентов 
    ,
    setStudyHours([2, 3, 5, 6, 6]) //  учебные часы пн-пт
    ,
    setExamsProf(5) //  профессор
    ,
    makeAnotherClass //  копия класса
], Students);
// функции
function makeAnotherClass(constructor) {
    return constructor;
}
function setExamsProf(amount) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.exams = amount;
                this.professor = 'Mr. Smith';
            }
        };
    };
}
function setStudyHours(hoursOfEnglishInAWeek) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.hoursOfEnglishInAWeek = hoursOfEnglishInAWeek;
            }
        };
    };
}
function setEnglishLevel(level) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.level = level;
            }
        };
    };
}
function calculateStudyHours(hoursArray) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.sumOfHours = hoursArray.reduce((a, b) => a + b, 0);
            }
        };
    };
}
console.log(new Students().getStudentsInfo());
console.log(new Students().professor);
console.log(new Students().hoursOfEnglishInAWeek);
console.log(new Students().level);
console.log(new Students().sumOfHours);
