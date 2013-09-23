if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.call(this,arr[0],arr[1],arr[2]);
    },

    speak : function(fn, obj) {
      return fn.call(obj, obj.greeting, obj.name);
    },

    functionFunction : function(str) {
       return function(str1) {
        return str + ', ' + str1;
      };
    },

    makeClosures : function(arr, fn) {
      var a = [];
      
      var ret = function (arg){
        return function() {
          return fn(arg);
        };
      };
      
      for (var i=0; i<arr.length; i++){
        a.push(ret(arr[i]));
      }
      
    return a;
    },

    partial : function(fn, str1, str2) {
      var args = Array.prototype.slice.call(arguments, 1)
      return function() {
        var remainingArgs = Array.prototype.slice.call(arguments)
        return fn.apply(null, args.concat(remainingArgs))
      }
    },

    useArguments : function() {
      var args = Array.prototype.slice.call(arguments);
      var ret = 0;
      for(var i=0; i<args.length; i++){
        ret+=args[i];
      }
      return ret;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1)
      return function() {
        var remainingArgs = Array.prototype.slice.call(arguments)
        return fn.apply(null, args.concat(remainingArgs))
        }
    },

    curryIt : function(fn) {

        function applyArguments(fn, arguments) {
            return fn.apply(null, arguments);
        }

        function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {

            return function (currentArgument) {

                accumulatedArguments.push(currentArgument);

                var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

                if (allArgumentsProvided) {
                    return applyArguments(fn, accumulatedArguments);
                } else {
                    return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
                }
            };
        }
        return getArgumentAccumulator([], fn.length);
    }
  };
});
