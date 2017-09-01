// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.


var table = {
       "1": "I",
       "5": "V",
      "10": "X",
      "50": "L",
     "100": "C",
     "500": "D",
    "1000": "M"
}

//lookup table corresponds to the decimal place being worked on. e.g. index 0 is single digits, index 1 is double digits, ...
//match the decimal place with the conversion table to convert roman numerals


//workout how to do 1-5 10-50 100-500 first, then figure out the rest

var romanLookup = [["I","V"],["X","L"],["C","D"],["M"]];


function convertToRoman(num) {
    var arabic = [];

    var resutl = [];
    

    // break up the arabic number into its decimal places
    arabic = num.toString().split("");

    // we need to reverse the array as map's index will start at the most significant digit and we need to process the least significant digit
    result = (arabic.reverse().map(function (element, index) {
        return convert(element, index);
    }));

    //return the array the right way around
    result.reverse();

    console.log(result.join());

    // start processing the arabic number from the least significant digit. start with the right most 

    //roman one's  , eg. I, X, C, M
    //roman fives  , eg. V, L, D

    //depending on what decimal place is being worked on, the following function can be passed the correct power roman letter.

    return;
}

function convert(num, decimalPlace) {
    var arabic = [];
    

    // break up the arabic number into its decimal places
    arabic = num.toString().split("");
    
            var roman = [];
    
            if (arabic[arabic.length - 1] > 0 && arabic[arabic.length - 1] < 4) {
                for (i = 0; i < arabic[0]; i++) {
                    roman.push(romanLookup[decimalPlace][0]);
                }
    
            } else if (arabic[arabic.length - 1] == 4) {
                roman.push(romanLookup[decimalPlace][0], romanLookup[decimalPlace][1]);
    
            } else if (arabic[arabic.length - 1] == 5) {
                roman.push(romanLookup[decimalPlace][1]);
            }
    
            return roman;
        }

convertToRoman(1);
convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(6);
convertToRoman(7);
convertToRoman(8);
convertToRoman(9);
convertToRoman(10);
convertToRoman(12);
convertToRoman(20);
convertToRoman(22);
convertToRoman(123);

convertToRoman(505);
convertToRoman(1009);
convertToRoman(3500);

// console.log(convertToRoman(2)); //should return "II".
// console.log(convertToRoman(3)); // should return "III".
// console.log(convertToRoman(4)); // should return "IV".
// console.log(convertToRoman(5)); // should return "V".
// console.log(convertToRoman(9)); // should return "IX".
// console.log(convertToRoman(12)); // should return "XII".
// console.log(convertToRoman(16)); // should return "XVI".
// console.log(convertToRoman(29)); // should return "XXIX".
// console.log(convertToRoman(44)); // should return "XLIV".
// console.log(convertToRoman(45)); // should return "XLV"
// console.log(convertToRoman(68)); // should return "LXVIII"
// console.log(convertToRoman(83)); // should return "LXXXIII"
// console.log(convertToRoman(97)); // should return "XCVII"
// console.log(convertToRoman(99)); // should return "XCIX"
// console.log(convertToRoman(500)); // should return "D"
// console.log(convertToRoman(501)); // should return "DI"
// console.log(convertToRoman(649)); // should return "DCXLIX"
// console.log(convertToRoman(798)); // should return "DCCXCVIII"
// console.log(convertToRoman(891)); // should return "DCCCXCI"
// console.log(convertToRoman(1000)); // should return "M"
// console.log(convertToRoman(1004)); // should return "MIV"
// console.log(convertToRoman(1006)); // should return "MVI"
// console.log(convertToRoman(1023)); // should return "MXXIII"
// console.log(convertToRoman(2014)); // should return "MMXIV"
// console.log(convertToRoman(3999)); // should return "MMMCMXCIX"