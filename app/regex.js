if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      var regex = /\d/g;
      return regex.test(str);
    },

    containsRepeatingLetter : function(str) {
      regex = /([a-z])\1/gi;
      return regex.test(str);
    },

    endsWithVowel : function(str) {
      var regex = /[aeiou]$/gi;
      return regex.test(str);
    },

    captureThreeNumbers : function(str) {
      var nums = /\d{3}/.exec(str);
      if (nums){
        return nums[0]
      }else{
        return false;
      }
    },

    matchesPattern : function(str) {
    // the pattern is XXX-XXX-XXXX where all X's are digits
      var regex = /^\d{3}-\d{3}\-\d{4}$/
      return regex.test(str);
    },

    isUSD : function(str) {
      var regex = /^\$\d+(,\d{3})*(\.\d{2})?$/;
      return regex.test(str);
    }
  };
});
