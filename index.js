var baseConvert = require('baseconvert');

$("#binTodec").click(function() {
var bin = $("#binary").val();
var result = baseConvert.bin2dec(bin);    
$("#decimal").val(result);   
});