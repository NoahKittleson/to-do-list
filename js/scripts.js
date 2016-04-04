var timeArray = [];

function Task(name, time, day){
  this.name = name;
  this.time = time;
  this.day = day;
}

function taskTotalTime () {
  var total = 0;
  for (var i = 0; i < timeArray.length; i++) {
    total += timeArray[i];
  }
  return total;
}


$(document).ready(function(){
  $("#buttonTime").click(function() {
    $("span#totalTime").text(taskTotalTime());

  });

  $("form#listForm").submit(function(event){
    event.preventDefault();
    var inputtedTask = $('input#task').val();
    var inputtedTime = parseInt($('input#timepicker1').val());
    var inputtedDay = $('#day').val();
    var newTask = new Task(inputtedTask, inputtedTime, inputtedDay);
    timeArray.push(inputtedTime);
    console.log(timeArray.length);
    $('#list').append("<li class='listTasks'><span>" +'TASK: ' + newTask.name + ' TIME: ' + newTask.time + ' DAY: ' + newTask.day +"</span></li>");
    $('#hidden').show();
    $("input#task").val("");
    $("li.listTasks").last().dblclick(function(){
       this.remove();
    });
    $("li.listTasks").last().click(function(){
       $("#show-task").show();
       $("#name").text(newTask.name);
       $("#time").text(newTask.time);
       $("#day").text(newTask.day);
    });
  });
});
