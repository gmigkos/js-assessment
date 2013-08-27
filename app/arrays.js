if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      var sum = 0;
      for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
      }
      return sum;
    },

    remove : function(arr, item) {
      return arr.filter(function (element, index, array){
        return element !== item;
      })
    },

    removeWithoutCopy : function(arr, item) {
      var i, len;

      for (i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === item) {
          arr.splice(i, 1);
          i = i - 1;
          len = len - 1;
        }
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;	
    },

    truncate : function(arr) {
      arr.splice(((arr.length)-1),1);
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      if (arr.length > 0){
        arr.splice(0,1);
        return arr;
      }
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var counts = 0;
      for(var i = 0; i < arr.length - 1; i++){
        if (arr[i] === item){
          counts++;
        }
      }
      return counts;
    },

    duplicates : function(arr) {
      var sorted_arr = arr.sort();
      var hash = {};
      var result = [];
      var i = 0;

      while ( i <  sorted_arr.length - 1 ) {
        if ( sorted_arr[i] === sorted_arr[i+1] && !hash.hasOwnProperty(sorted_arr[i]) ){
	  hash[sorted_arr[i]] = true;
          result.push(sorted_arr[i]);
        }
        i++;
      }
      return result;
    },

    square : function(arr) {
      var squared = [];	
      for(var i = 0; i < arr.length; i++){
          squared.push(arr[i]*arr[i]);
      }
      return squared;
    },

    findAllOccurrences : function(arr, target) {
      var occ = [];
      for(var i = 0; i < arr.length; i++){
        if (target === arr[i]){
          occ.push(i);
        }
      }
      return occ;
    }
  };
});
