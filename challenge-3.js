//add arguments optional

function addTogether(){
    const [first, second] = arguments;
    if(typeof(first) !== "number")
        return undefined;
    if(second === undefined)
        return (second) => addTogether(first, second);
    if(typeof(second) !== "number")
        return undefined;
    return first + second;
}
console.log(addTogether(2, 3));

//objects and constructors

let person = function(firstAndLast){
    let fullName = firstAndLast;

    this.getFirstName = function(){
        return fullName.split(" ")[0]
    };

    this.getLastName = function(){
        return fullName.split(" ")[1]
    };

    this.getFullName = function(){
        return fullName
    };

    this.setFirstName = function(name){
        fullName = name + " " + fullName.split(" ")[1]
    };

    this.setLastName = function(name){
        fullName = fullName.split(" ")[0] + " " + name
    }

}
const pers = new person("denis kidagi");
console.log(pers.getFirstName())
console.log(pers.getLastName())
console.log(pers.getFullName())
console.log(pers.setFirstName("ann"))
console.log(pers.setLastName("kasandi"))
console.log(pers.getFullName())
