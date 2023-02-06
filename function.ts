function addTwo(num: number): number { //First number is for input, second is for returning value.
    // num.toUpperCase() => It shows error
    // because toUpperCase is for strings only
    return num + 2;
    // return 'hello';   //It shows an error because this function is only supposed to return number type;
}

addTwo(5);

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper('Aditya')

function signUp(name: string, email: string, isPaid: boolean) {
}

signUp('Adi', 'myname@example.com', false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}

loginUser('Adi', 'adi@gmail.com');


// Returning output of two different types;
function getalue(myVal: number) {
    if (myVal > 5) {
        return true
    }
    return "200 ok"
}

//Syntax for arrow functions
const getHello = (s:string):string => {
    return "If I don't return a string, it will show error";
}   

const heroes = ['thor', 'ironman', 'loki']

heroes.map(hero => {
    return `hero is ${hero}`;
})

function consoleError(errmsg: string):void{
    console.log(errmsg);
}

export { } 