// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

/*
Roman Numerals Reference Table
    1 = I
    5 = V
   10 = X
   50 = L
  100 = C
  500 = D
 1000 = M

The romanLookup table is used to convert arabic numbers by lining up the array's index to the arabic number's decimal place; then converting each number in turn based on coversion rules. Because of the way roman numberals work, the number 9 uses the next index of the array.

e.g. index 0 corresponds to 1-8, index 1 corresponds to 9-89, index 2 corresponds to 90 - 899 ...

*/

var romanLookup = [
    ["I", "V"],
    ["X", "L"],
    ["C", "D"],
    ["M"]
];

function convertToRoman(num) {
    var result = [];

    // break up the arabic number into its decimal places
    num = num.toString().split("");

    // we need to reverse the array as map's index will start at the most significant digit and we need to process the least significant digit first
    result = (num.reverse().map(function (element, index) {
        return convert(element, index);
    }));

    //now that we've processed it, place the array the right way around
    return result.reverse().join("");
}

function convert(number, decimalPlace) {
    var roman = [];

    //process numbers 1-3
    if (number > 0 && number < 4) {
        for (i = 0; i < number; i++) {
            roman.push(romanLookup[decimalPlace][0]);
        }

        //  process number 4
    } else if (number == 4) {
        roman.push(romanLookup[decimalPlace][0], romanLookup[decimalPlace][1]);

        //  process number 5
    } else if (number == 5) {
        roman.push(romanLookup[decimalPlace][1]);

        // process numbers 6-8
    } else if (number > 5 && number < 9) {
        roman.push(romanLookup[decimalPlace][1]);
        for (i = 0; i < number - 5; i++) {
            roman.push(romanLookup[decimalPlace][0]);
        }

        // process number 9
    } else if (number == 9) {
        roman.push(romanLookup[decimalPlace][0], romanLookup[decimalPlace + 1][0]);
    }

    return roman.join("");
}

console.log(convertToRoman(2)); //should return "II".
console.log(convertToRoman(3)); // should return "III".
console.log(convertToRoman(4)); // should return "IV".
console.log(convertToRoman(5)); // should return "V".
console.log(convertToRoman(9)); // should return "IX".
console.log(convertToRoman(12)); // should return "XII".
console.log(convertToRoman(16)); // should return "XVI".
console.log(convertToRoman(29)); // should return "XXIX".
console.log(convertToRoman(44)); // should return "XLIV".
console.log(convertToRoman(45)); // should return "XLV"
console.log(convertToRoman(68)); // should return "LXVIII"
console.log(convertToRoman(83)); // should return "LXXXIII"
console.log(convertToRoman(97)); // should return "XCVII"
console.log(convertToRoman(99)); // should return "XCIX"
console.log(convertToRoman(500)); // should return "D"
console.log(convertToRoman(501)); // should return "DI"
console.log(convertToRoman(649)); // should return "DCXLIX"
console.log(convertToRoman(798)); // should return "DCCXCVIII"
console.log(convertToRoman(891)); // should return "DCCCXCI"
console.log(convertToRoman(1000)); // should return "M"
console.log(convertToRoman(1004)); // should return "MIV"
console.log(convertToRoman(1006)); // should return "MVI"
console.log(convertToRoman(1023)); // should return "MXXIII"
console.log(convertToRoman(2014)); // should return "MMXIV"
console.log(convertToRoman(3999)); // should return "MMMCMXCIX"