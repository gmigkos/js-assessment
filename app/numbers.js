if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bin = num.toString(2);
        if (bin.length < 8) {
            bin = '0000000'.split('').slice( 0, 8 - bin.length ).join('') + bin;
        }
        var bitArr = bin.split('').map(Number);
        return bitArr[8-bit];
    },

    base10: function(str) {
        var num = 0;
        for (var i = 0; i < str.length; i++){
            num +=(Math.pow(2,7-i))*str[i];
        }
        return num;
    },

    convertToBinary: function(num) {
        var bin = num.toString(2);
        if (bin.length < 8) {
            bin = '0000000'.split('').slice( 0, 8 - bin.length ).join('') + bin;
        };
        return bin;
    },

    multiply: function(a, b) {
        return (a*10000000*(b*10000000))/(10000000*10000000);
    }
  };
});

