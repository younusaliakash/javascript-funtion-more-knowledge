// Hoisting

var a = 100
// newprint (a) //Function = undefine

print (10) //Function = 10

var newprint = print
newprint (45)  //function = undefine

function print (a){
    console.log(a)
}


print (a)  //function = 100

//C F
//a = undefine
//newprint = undefine
// print = ref

//EP
// a = 100