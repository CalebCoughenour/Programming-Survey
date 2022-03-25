function add(number1, number2, number3, number4, number5, number6) {
  return number1 + number2 + number3 + number4 + number5 + number6;
}


$(document).ready(function() {
  $("form#survey-form").submit(function(event) {
    event.preventDefault();
    const langAnswer = $("#lang-difficulty").val();
    const sourceAnswer = $("#source").val();
    const libraryAnswer = $("#libraries").val();
    const blocksAnswer = $("#code-blocks").val();
    const typeCastingAnswer = $("#type-casting").val();
    const interpretAnswer = $("#interpreter").val();
    
    const totalValue = add(langAnswer, sourceAnswer, libraryAnswer,  blocksAnswer,  typeCastingAnswer, interpretAnswer);

    if (value <= 6) {

    } else if (value is <= 9) {

    }
    


  });
});