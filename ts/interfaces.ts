export interface IStudentsInfo //   инфа 
{
    subject: string,
    class: number,

}

export interface IStudentsAmount //   кол-во экзаменов 
{
    exams: number,
    info: IStudentsInfo;
    marks: IMarks;

}

export interface IMarks //   оценки 
{
    marksFirstGoup: number[];
    marksSecondGoup: number[];
}


export interface IStudents //   студенты общая 
{
    exams: number,
    info: IStudentsInfo;
    getStudentsInfo(): IStudentsAmount;
    marks: IMarks;

}

export interface IProf //   профессор 
{
    professor: string;
}

export interface IHours // часы каждый день недели
{
    hoursOfEnglishInAWeek: number[];
}

export interface ISumHours   
{
    sumOfHours: number;
}


export enum languageLevel   // виды уровней
{
    beginner = 'beginner',
    intermediate = 'intermediate',
    advanced = 'advanced'
}

export interface ILevel   // уровень группы
{
    level: languageLevel;
}
