// Write code to return the the number of vowels in `str`
var vowelCount = function(str) {
    var result = 0;
    var vowels = ["a", "e", "i", "o", "u"];
  
    for (var i = 0; i < str.length; i++) {
      var letter = str[i].toLowerCase();
  
      if (vowels.indexOf(letter) !== -1) {
        result += 1;
      }
    }
  
    return result;
  };

// var vowelCount = function(str) {
//     // Define a regular expression to match vowels (both lowercase and uppercase)
//     var vowels = /[aeiouAEIOU]/g;
    
//     // Use the match method with the regular expression to find all occurrences of vowels in the string
//     var vowelMatches = str.match(vowels);
    
//     // If vowelMatches is null (no vowels found), return 0, otherwise return the length of the vowelMatches array
//     return vowelMatches ? vowelMatches.length : 0;
// };

// // Test the function
// console.log(vowelCount("umbrella")); // Output: 2