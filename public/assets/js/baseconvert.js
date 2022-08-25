(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var baseConvert = require('baseconvert');

$("#binToDec").click(function() {
var bin = $("#binary").val();
var result = baseConvert.bin2dec(bin);    
$("#decimal").val(result);   
});
$("#decToBin").click(function() {
var decimal = $("#decimal").val();
var result = baseConvert.dec2bin(decimal);    
$("#binary").val(result);   
});    
},{"baseconvert":2}],2:[function(require,module,exports){
var BaseConvert = {

  converter: function(number) {
    this.fromBase = function(baseFrom) {
      this.toBase = function(baseTo) {
        return parseInt(number, baseFrom).toString(baseTo);
      };
      return this;
    };
    return this;
  },

  dec2hex: function(number) {
    return this.converter(number).fromBase(10).toBase(16);
  },

  hex2dec: function(number) {
    return this.converter(number).fromBase(16).toBase(10);
  },

  bin2dec: function(number) {
    return this.converter(number).fromBase(2).toBase(10);
  },

  dec2bin: function(number) {
    return this.converter(number).fromBase(10).toBase(2);
  },

  bin2hex: function(number) {
    return this.converter(number).fromBase(2).toBase(16);
  },

  hex2bin: function(number) {
    return this.converter(number).fromBase(16).toBase(2);
  }
};

module.exports = BaseConvert;

},{}]},{},[1]);
