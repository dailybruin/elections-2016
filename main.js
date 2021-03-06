function switchFilters(on, off1, off2){
  $(on).show();
  $(on + "-button").addClass("selected");
  if ($(off1 + "-button").hasClass("selected")){
    $(off1).toggle('hide');
    $(off1 + "-button").removeClass("selected");
  }
  if ($(off2 + "-button").hasClass("selected")){
    $(off2).toggle('hide');
    $(off2 + "-button").removeClass("selected");
  }
}

$(document).ready(function () {
    $(".national-button").on("click", function (e) {
        e.preventDefault();
        switchFilters(".national", ".state", ".local");
    });

    $(".state-button").on("click", function (e) {
        e.preventDefault();
        switchFilters(".state", ".national", ".local");
    });

    $(".local-button").on("click", function (e) {
        e.preventDefault();
        switchFilters(".local", ".national", ".state");
    });

    $(".all").on("click", function(){
      if (!$(".national-button").hasClass("selected")){
        $(".national-button").addClass("selected");
        $(".national").toggle('hide');
      }
      if (!$(".state-button").hasClass("selected")){
        $(".state-button").addClass("selected");
        $(".state").toggle('hide');
      }
      if (!$(".local-button").hasClass("selected")){
        $(".local-button").addClass("selected");
        $(".local").toggle('hide');
      }
    });
});
