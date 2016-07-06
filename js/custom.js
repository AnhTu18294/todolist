$(document).ready(function(){
  
  var $btnAdd = $("#btnAdd");
  var $btnDel = $("#btnDel");
  var $tbJob  = $("#tbJob");
  var $listJobs = $("#listJobs")
  
  var index = 0;
  $btnAdd.click(addJobToList);
  $btnDel.click(delListJobsChecked);

  function addJobToList(){
    if($tbJob.val() != ""){
        index += 1;
        $listJobs.append("<li>"+"<input type = 'checkbox' class = 'delete' id = 'check_"+index+"'' />"+$tbJob.val()+"<button id = 'btnDel_"+index+"' >Del</button></li>");
        $("#btnDel_"+index).click(delJob);
        $("#check_"+index).change(doneJob);
    }
  };

  function delJob(){
    console.log($(this).parent());
    $(this).parent().remove();
  };

  function doneJob(){
    if($(this).is(":checked")) {
        $(this).parent().css('text-decoration','line-through');
    } 
  };

  function delListJobsChecked(){
    $(".delete").each(function(){
        console.log($(this));
        if($(this).is(":checked")){
        $(this).parent().remove();
        }
    });    
  };


});