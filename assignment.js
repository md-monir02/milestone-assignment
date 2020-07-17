// feetToMile assignment (1)
function feetToMile(mile) {
    var feet = mile / 5280;
    return feet;
}
var result = feetToMile(10000);
console.log(result);
// assignment (1) finish

// woodCalculator assignment (2)
function woodCalculator(chair,table,bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount+tableCount+bedCount;
    return totalWood;
}
// assignment (2) finish

// brickCalculator assignment (3)
function brickCalculator(floor){
    var feet = 1000
    var totalBrick1;
    var totalBrick2;
    var totalBrick3;
                if(floor <= 10){
                var totalBrick1 = feet * 15 * floor
                result = totalBrick1;
                }
                else
                if(floor >=11 && floor <=20){
                    var totalBrick2 = feet * 12 * floor;
                    result = totalBrick2;
                }
                else if(floor >=21){
                    var totalBrick3 = feet * 10 * floor;
                    result = totalBrick3;
                }
                var totalBrick = totalBrick1 + totalBrick2 + totalBrick3
                return totalBrick;
}

// assignment (3) finish

//tinyFriend assignment (4)
function tinyFriend(names){
    var tinyName = names[0];
    for( var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(tinyName.length > currentName.length){
            tinyName = currentName;
        }
}
return tinyName;
}
var smallName = tinyFriend(['rocky', 'ti', 'lopama', 'ranamu', 'sailima', 'ali'])
console.log(smallName);
// assignment (4) finish