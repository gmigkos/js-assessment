if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

        var deferred = $.Deferred();

        setTimeout(function() {
            deferred.resolve(value);
        }, 100);
        return deferred.promise();
    },

    manipulateRemoteData : function(url) {
        var deferred = $.Deferred();

        $.getJSON(url,function(resp) {
            var people = $.map (resp.people, function (i){
                 return i.name;
            });
            deferred.resolve(people.sort());
        });
        console.log(deferred);
        return deferred.promise();
    }
  };
});
