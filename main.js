console.log(rot13("SERR CVMMN!"));

//Reverse the provided string
function reverseString(val) {
    var arr = val.split('');
    arr = arr.reverse().join('');
    return arr;
}

//Return the factorial of the provided integer
function factorialize(num) {
    var result=1;
    for (var i=1; i<=num; i++){
        result *= i;
    }
    return result;
}

//Return true if the given string is a palindrome. Otherwise, return false
function palindrome(val) {

    var arr = val.replace(/\W|_/gi, '').toLowerCase().split('');

    for (var i = 0; i < arr.length/2; i++){
        if (arr[i] !== arr[arr.length - 1 - i]){
            return false;
        }
    }
    return true;
}

//Return the length of the longest word in the provided sentence.
function findLongestWord(str) {

    var arr = str.split(' ');
    str = arr[0];

    for (var i = 0; i < arr.length; i++){
        if (arr[i].length > str.length){
            str = arr[i];
        }
    }

    return str.length;
}

//Return the provided string with the first letter of each word capitalized
function titleCase(str) {

    var arr = str.toLowerCase().split(' ');

    for (var i = 0; i < arr.length; i++){
        var firstChar = arr[i].charAt(0);
        arr[i] = arr[i].replace(firstChar, firstChar.toUpperCase());
    }

    str = arr.join(" ");

    return str;
}

//Return an array consisting of the largest number from each provided sub-array
function largestOfFour(arr) {

    var arrMax = [];

    for (var i = 0; i < arr.length; i++){

        var max = arr[i][0];

        for (var j = 0; j < arr[i].length; j++){

            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }

        arrMax.push(max);
    }

    return arrMax;
}

//Check if a string (first argument, str) ends with the given target string (second argument, target)
function confirmEnding(str, target) {

    return (target == str.substr(-(target.length)));
}

//Repeat a given string (first argument) num times (second argument)
function repeatStringNumTimes(str, num) {

    var newStr = str;

    for (var i = 1; i < num; i++){
        newStr = newStr.concat(str);
    }

    return newStr;
}

//Truncate a string (first argument) if it is longer than the given maximum string length (second argument)
function truncateString(str, num) {

    if (str.length > num && num > 3) {
        return str.slice(0, (num - 3)) + '...';
    } else if (str.length > num && num <= 3) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }

}

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array
function chunkArrayInGroups(arr, size) {

    var newArr = [];

    for (var i = 0; i < arr.length; i+=size){
        newArr.push(arr.slice(i, i+size));
    }
    return newArr;
}

//Return the remaining elements of an array after chopping off n elements from the head
function slasher(arr, howMany) {

    if (arr.length <= howMany){
        arr = [];
    }
    else{
        arr = arr.slice(howMany);
        console.log(arr);
    }
    return arr;
}

//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array
function mutation(arr) {

    for ( var i = 0; i < arr[1].length; i++){
        if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) < 0){
            return false;
        }
    }

    return true;
}

//Remove all falsy values from an array
function bouncer(arr) {

    return arr.filter(Boolean);
}

//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments
function destroyer(arr) {

    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));

    args = args[0].filter(function (value) {
        if (args.indexOf(value) < 0){
            return value;
        }
    });

    console.log(args);
}

//Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted
function getIndexToIns(num, arg) {

    num.push(arg);

    console.log(num);

    num.sort(function (a, b) {
        return a - b;
    });

    console.log(num);

    return num.indexOf(arg);
}

//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount
function rot13(str) {

    var newStr = [];

    for (var i = 0; i < str.length; i++){

        if (str[i].match(/[A-M]/)){
            newStr.push(String.fromCharCode(str.charCodeAt(i) + 13));
            console.log(newStr[i]);
        }
        else if (str[i].match(/[N-Z]/)) {
            newStr.push(String.fromCharCode(str.charCodeAt(i) - 13));
            console.log(newStr[i]);
        }
        else{
            newStr.push(str[i]);
            console.log(newStr[i]);
        }
    }

    return  newStr.join("");

}