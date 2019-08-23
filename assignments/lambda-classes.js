// CODE here for your Lambda Classes
class Person {
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;

    }
    speak() {
        console.log(`Hello myname is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(obj){
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject){ //subject is a string
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){ //student is an object, subject is a string
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(obj){
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects; // This one will be an array
    }
    listSubjects(){
        console.log(`${this.name}'s favorite subjects are: `);
        this.favSubjects.forEach( current => {
            console.log(current);
        });
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class Project_Manager extends Instructor {
    constructor(obj){
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(obj, subject){
        console.log(`${this.name} debugs ${obj.name}'s code on ${subject}`);
    }
}




// Stuff for testing below here

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


const rincewind = new Student({
    name: 'Rincewind',
    location: 'Ang-Morpork',
    age: 32,
    previousBackground: 'Messing everything up everywhere he went.',
    className: 'WEB23',
    favSubjects: ['magic-I', 'magic-II', 'magic-III']
});

const death = new Project_Manager({
    name: 'Death',
    location: 'Outside space time',
    age: 0,
    favLanguage: 'none',
    specialty: 'Collecting souls',
    catchPhrase: '...',
    gradClassName: ' ',
    favInstructor: ' '
});

// fred.demo('CSS');
// rincewind.listSubjects();
// rincewind.PRAssignment(rincewind.favSubjects[0]);
// rincewind.sprintChallenge(rincewind.favSubjects[1]);
// death.standUp('WEB23');
// death.debugsCode(rincewind,rincewind.favSubjects[1]);