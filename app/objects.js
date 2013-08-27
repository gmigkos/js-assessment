if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var result = [];
      for (var property in obj){
        if (obj.hasOwnProperty(property)){
          result.push(property+': '+obj[property]);
        }
      }
      return result;
    }
  };
});
