// this overrides `contains` to make it case insenstive


$( document ).ready(function() {
   jQuery.expr[':'].contains = function(a, i, m) {
  return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
};

$('#search').keyup(function (){
    $('.card').removeClass('d-none');
    var filter = $(this).val(); // get the value of the input, which we filter on
    $('.card-len').find('.card .card-body h5:not(:contains("'+filter+'"))').parent().parent().addClass('d-none');
})
});