$(function(){
  $("p").hide();
  $("form.checkbox").submit(function(event){
    event.preventDefault();
    $("p").hide();
    var warningSign = [];
    var symptoms = [];
    var coping = [];
    $("input:checkbox[name=warningSign]:checked").each(function(){
      var userWarning = $(this).val();
      warningSign.push(userWarning);
    });
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var userSymptoms = $(this).val();
      symptoms.push(userSymptoms);
    });
    $("input:checkbox[name=coping]:checked").each(function(){
      var userCoping = $(this).val();
      coping.push(userCoping);
    });
    if ((symptoms.length >= 4 || warningSign.length >= 4) && coping.length <= 3) {
      $("p#issues").show();
    }
    else if ((warningSign.length < 4 || symptoms.length < 4) && coping.length > 2) {
      $("p#specialist").show();
    }
    else {
      $("p#good").show();
    }
  });
});
