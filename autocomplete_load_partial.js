$(function(){
$('#product_name').bind('railsAutocomplete.select', function(event, data){
  /* Do something here */
  $.ajax({
  url: "/products/product_details?product_id="+data.item.id,
  context: document.body,
  success: function(html){
$("#divToBePopulated").html(html);
  }
});
});
})
