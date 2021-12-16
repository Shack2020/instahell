// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];

// for(var i=0; i<numbers.length; i++){
//     if(numbers[i] > 0){ 
//             countPositives = countPositives + 1;
//     } 

// }

// console.log("there are " + countPositives + " positive values in the array!");

function isPal(arr){
    for(var left = 0; left < arr.length/2; left++){
        var right = arr.length - 1 -left;               // right
        if(arr[left] !== arr[right]){
            return "Not a palindrome!";
        }
    }
    return "Palindrome!!!!";
}

var result1 = isPal(([1,1,2,2,1]));
console.log(result1);

var result2 = isPal(([3,2,1,1,2,3]));
console.log(result2);