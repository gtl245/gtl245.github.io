var adj = $('#adj').val();
var wnoun = $('#noun1').val();
var wnoun2 = $('#noun2').val();

$('#badj').click(function() {
  $('#inputAdj').text(adj);
});


$('#bnoun1').click(function() {
  $('#inputNoun').text(wnoun);
});


$('#bnoun2').click(function() {
  $('#inputNoun2').text(wnoun2);
});
