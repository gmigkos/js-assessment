if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var list = [];
      var currentDir = "";
      var found = 0;

      function calculateFileList(data){       
        for (var prop in data){
          if (prop === 'files'){
            for (var i = 0; i < (data[prop]).length; i++){
              if (typeof (data[prop])[i] === 'string'){
                list.push((data[prop])[i]);
              }else {
                calculateFileList((data[prop])[i]);
              } 
            }
          }
        } 
      };

      function calculateDirFileList(data, dirName){       
        for (var prop in data){
          currentDir = data.dir;
          if (prop === 'files'){
            for (var i = 0; i < (data[prop]).length; i++){
              if (typeof (data[prop])[i] === 'string' && dirName === currentDir){
                list.push((data[prop])[i]);
                found = 1;
              }else if (found == 0){
                calculateDirFileList((data[prop])[i],dirName);
              }else{
                currentDir = ((data[prop])[i]).dir;
                calculateDirFileList((data[prop])[i],((data[prop])[i]).dir);
              } 
            }
          }
        } 
        found = 0;
      };
      if (dirName){
        calculateDirFileList(data,dirName);
      } else {
        calculateFileList(data);
      }
      
      return list;
    },

    permute: function(arr) {
      var permArr = [],
      usedChars = [];

      function perm(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
          ch = input.splice(i, 1)[0];
          usedChars.push(ch);
          if (input.length == 0) {
            permArr.push(usedChars.slice());
          }
          perm(input);
          input.splice(i, 0, ch);
          usedChars.pop();
        }
        return permArr;
      };
      return perm(arr);
    }  
  };
});
