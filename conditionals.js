// Computer values are 0 and 1, aka OFF and ON
// Logic True or False, 0 is usually false and non-zero is usually true

//Inputs
hasCar = true
hasLicense = false
canRachPedals = true

const meetsAllCriteria = hasLicense && hasCar && canRachPedals

//Calculation
console.log("START")

//Decision
if(hasLicense && hasCar && canRachPedals){
    console.log("Zoom");
    console.log("Zoom");
}

console.log(hasLicense)

if(hasLicense){  //acts as a gate
    console.log("Zoom Zoom")
}else{
    console.log("Cry and  suffer.")
}

console.log("Finish")