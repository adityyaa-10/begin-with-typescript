let greetings: string = "Hello Adi";
let mynum = 6;
// mynum.toUppercase() => It will return an error
//as  mynum accepts number type and toUppercase is used for string type
console.log(greetings);

//number 
let userId = 8997;

//boolean
let isLoggedIn: boolean = false;

//any 
// let hero; Inferred as any
let hero:string; //Inferred as string
function getHero(){
    return "Iron Man";
}

hero = getHero();

export { }