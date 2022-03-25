function add(number1, number2, number3, number4, number5, number6) {
  return number1 + number2 + number3 + number4 + number5 + number6;
}


$(document).ready(function() {
  $("form#survey-form").submit(function(event) {
    event.preventDefault();
    const langAnswer = parseInt($("#lang-difficulty").val());
    const sourceAnswer = parseInt($("#source").val());
    const libraryAnswer = parseInt($("#libraries").val());
    const blocksAnswer = parseInt($("#code-blocks").val());
    const typecastingAnswer = parseInt($("#typecasting").val());
    const interpretAnswer = parseInt($("#interpreter").val());
    
    const totalValue = add(langAnswer, sourceAnswer, libraryAnswer,  blocksAnswer,  typecastingAnswer, interpretAnswer);

    if (totalValue <= 8) {
      $("#python-reveal").show();
      $("#javascript-reveal").hide();
      $("#c-reveal").hide();
    } else if (totalValue <= 10) {
      $("#javascript-reveal").show();
      $("#python-reveal").hide();
      $("#c-reveal").hide();
    } else {
      $("#c-reveal").show();
      $("#javascript-reveal").hide();
      $("#python-reveal").hide();
    }
  });
});

  $(document).ready(function() {
    $("form#survey-form").submit(function(event) {
      event.preventDefault();
      const usersName = $("input#users-name").val();

      $(".users-name").text(usersName);
    });
});