export class Batches{
    public name:string;
    public date:string;
    constructor(name:string,date:string){
       this.name = name;
       this.date = date;
    }
}
export class Program{
    public name:string;
    
    constructor(name:string){
        this.name = name;
    }
}


export class Courses{
    
    public code:string;
    public courseName:string;
    public topicProgress:string;
    public courseCompletion:string;

    constructor(code:string,courseName:string,topicProgress:string,courseCompletion:string){
        this.code = code;
        this.courseName = courseName;
        this.topicProgress = topicProgress;
        this.courseCompletion = courseCompletion;
    }
}
export class Topic{
    public topicsCompleted:string;
    constructor(topicsCompleted:string){
        this.topicsCompleted = topicsCompleted;
    }
}

export class Code{

    public code:string
    constructor(code:string){
        this.code = code;
    }
}

export class Chapter{
    public name:string
    constructor(chap:string){
        this.name = chap;
    }
}