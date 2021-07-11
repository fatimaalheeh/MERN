//1/Given
// console.log(hello);                                   
// var hello = 'world';                                 

//becomes
var hello;
console.log(hello);//logs undefined ,Reference error           
hello = 'world';//hello='world'
 
//-------------------------------------
//2/Given
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

//becomes
var needle;
needle = 'haystack';
test();//logs 'magnet'
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
//magnet 
//-------------------------------------
//3/Given
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

//becomes
var brendan;
brendan = 'super cool';
function print(){//won't run, it's not called
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);//logs 'super cool'
//-------------------------------------
//4/Given
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

//becomes
var food;
food = 'chicken';
console.log(food);//logs 'chicken'
eat();//logs 'half-chicken'
function eat(){
    var food
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
//chicken, half-chicken
//-------------------------------------
//5/Given
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);


//becomes
var mean = function() {
        var food;
        food = "chicken";
        console.log(food);
        food = "fish";
        console.log(food);
    }
    
    mean();//chicken, fish
    console.log(food);//Reference ERROR, undefined
    
//-------------------------------------
//6/Given
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//becomes
var genre;
console.log(genre);//No ERROR,genre is undefined //logs undefined
genre = "disco";
rewind();//logs rock, r&b
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);//logs disco
//rock, r&b, disco
//-------------------------------------
//7/Given
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//becomes
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//-------------------------------------
//8/Given
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

//becomes
console.log(makeDojo("Chicago", 65));
 /*{  hiring: true,  name: "Chicago",  students: 65  } */
console.log(makeDojo("Berkeley", 0));
//Uncaught TypeError: Assignment to constant variable.
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";//dojo is a constant can't be reassigned, 
    }
    return dojo;
}

