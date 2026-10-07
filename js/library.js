export let message = "es6 module";

export function user(name) {
    console.log(`Hello ${name}`)
}

export class test{
    constructor(){
        console.log("I am module constructor calling");
    }
}
