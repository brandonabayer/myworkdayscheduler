    $(document).ready(function(){

$(".btn").on("click",function(){
    var time = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val().trim();
    console.log(time, value);
  localStorage.setItem(time, value);

})
      console.log(localStorage.getItem("hour-9"));
      $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  $("#currentDay").text(moment().format("LLLL"));

  function currentFunction(getItem, time);
    var timeList = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
    for (var i = 0; i < timeList.length; i++) {
      const element = timeList[i];
      
    }
    
})
// create a function
// inside the function obtain the current hour using moments
// loop over each time block
// store current hour
// store each over into variable
// create a conditional to assess time value if past or future
