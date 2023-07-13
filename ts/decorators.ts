import { IStudentsInfo, IStudentsAmount, IMarks, IStudents, IProf, IHours, ISumHours, languageLevel, ILevel } from "./interfaces";

@calculateStudyHours([2, 3, 5, 6, 6])  // считает количество учебных часов в неделю
@setEnglishLevel(languageLevel.advanced)  //  уровень студентов 
@setStudyHours([2, 3, 5, 6, 6])  //  учебные часы пн-пт
@setExamsProf(5)  //  профессор
@makeAnotherClass  //  копия класс
class Students implements IStudents
{
    exams: number = 15;
    info: IStudentsInfo = {
        subject: 'English',
        class: 9,

    };
    marks: IMarks = {
        marksFirstGoup: [5, 4, 3, 5, 3],
        marksSecondGoup: [5, 2, 1, 3, 4]
    };



    getStudentsInfo()
    {
        return {
            exams: this.exams,
            info: this.info,
            marks: this.marks,

        };
    }

}


// функции

function makeAnotherClass<T extends { new(...args: any[]): {}; }>(constructor: T)
{
    return constructor;

}

function setExamsProf(amount: number)
{
    return <T extends { new(...args: any[]): {}; }>(constructor: T) =>
    {
        return class extends constructor
        {
            exams: number = amount;
            professor: string = 'Mr. Smith';
        };
    };
}

function setStudyHours(hoursOfEnglishInAWeek: number[])
{

    return <T extends { new(...args: any[]): {}; }>(constructor: T) =>
    {
        return class extends constructor
        {
            hoursOfEnglishInAWeek: number[] = hoursOfEnglishInAWeek;
        };
    };
}

function setEnglishLevel(level: languageLevel)  
{
    return <T extends { new(...args: any[]): {}; }>(constructor: T) =>
    {
        return class extends constructor
        {
            level: languageLevel = level;
        };

    };
}

function calculateStudyHours(hoursArray: number[])
{
    return <T extends { new(...args: any[]): {}; }>(constructor: T) =>
    {
        return class extends constructor
        {
            sumOfHours: number = hoursArray.reduce((a, b) => a + b, 0);
        };
    };
}

console.log(new Students().getStudentsInfo());
console.log((new Students() as IStudents & IProf).professor);
console.log((new Students() as IStudents & IHours).hoursOfEnglishInAWeek);
console.log((new Students() as IStudents & ILevel).level);
console.log((new Students() as IStudents & ISumHours).sumOfHours)


