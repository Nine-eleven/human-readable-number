module.exports = function toReadable (number) {

  number = String (number);

 let amountOfNumerals = number.length;
 let RESULT = "";
 let UNIT_RESULT = "";



 if (amountOfNumerals === 1) { return getUnit (number) };
 if (amountOfNumerals === 2) { return getTenth (number) };
 if (amountOfNumerals === 3) { return getHundreds (number) };
  
 
 function getUnit (unit) { 
     return (+unit === 1) ? "one" : 
     (+unit === 2) ? "two" : 
     (+unit === 3) ? "three" : 
     (+unit === 4) ? "four" :
     (+unit === 5) ? "five" :
     (+unit === 6) ? "six" :
     (+unit === 7) ? "seven" :
     (+unit === 8) ? "eight" :
     (+unit === 9) ? "nine" :
     "zero" ;
 }

 
 function getTenth (number) {
     
    let firstNumeral = number[0];
    let secondNumeral = number[1];

    if (+firstNumeral === 1) {
    return (+number === 10) ? "ten" : 
    (+number === 11) ? "eleven" : 
    (+number === 12) ? "twelve" : 
    (+number === 13) ? "thirteen" :
    (+number === 14) ? "fourteen" :
    (+number === 15) ? "fifteen" :
    (+number === 16) ? "sixteen" :
    (+number === 17) ? "seventeen" :
    (+number === 18) ? "eighteen" :
    "nineteen" ;
    } else {
        let Tenth = (+firstNumeral === 2) ? "twenty" : 
        (+firstNumeral === 3) ? "thirty" : 
        (+firstNumeral === 4) ? "forty" : 
        (+firstNumeral === 5) ? "fifty" :
        (+firstNumeral === 6) ? "sixty" :
        (+firstNumeral === 7) ? "seventy" :
        (+firstNumeral === 8) ? "eighty" :
        (+firstNumeral === 9) ? "ninety" :
        "";

        return Tenth + (((getUnit (secondNumeral) === "zero")) ? "" : (Tenth === "") ? ("" + getUnit (secondNumeral)) : (" " + getUnit (secondNumeral)));

    
    }
}

function getHundreds (number) {

    let firstNumeral = number[0];
    let secondNumerals = number[1] + number[2];
    return getUnit (firstNumeral) + " " + "hundred" + ((getTenth (secondNumerals) === "") ? "" : (" " + getTenth (secondNumerals)));

}


}
