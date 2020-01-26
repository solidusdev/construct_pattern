function construct_pattern(num) {

    let str = "";

    for (let i = 0; i < num; i++) {
        str += "* ";
        console.log(str);
    }

    return "Complete!";
}

console.log(construct_pattern(1));
console.log(construct_pattern(2));
console.log(construct_pattern(3));

/* output 1:
    * 
    Complete!
*/

/* output 2:
    * 
    * * 
    Complete!
*/

/* output 3:
    * 
    * * 
    * * * 
    Complete!
*/