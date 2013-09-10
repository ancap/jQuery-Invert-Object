(function($){
$.fn.invert = function(obj) {

  var key, a = {};

  for (key in this[0]) {
    if (this[0].hasOwnProperty(key)) 
      a[this[0][key]] = key;
  }
  
  if (obj) 
    return this[0]; 
  
  this[0] = a; 
  return this;

};
}(jQuery));