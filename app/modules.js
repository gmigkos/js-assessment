if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
      var modName = str2,
      modGreeting = str1,
      retObj = {
        name:modName,
        greeting:modGreeting,
        sayIt:function (){
        return this.greeting+", "+this.name;
        }  
      };
      console.log(retObj);
      return retObj;
    }
  };
});

