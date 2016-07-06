$(document).ready(function(){
  
  var $btnAdd = $("#btnAdd");
  var $btnDel = $("#btnDel");
  var $tbJob  = $("#tbJob");
  var $listJobs = $("#listJobs")
  
  var index = 0;
  $btnAdd.click(addJobToList);
  $btnDel.click(delListJobsChecked);

  $("#cbTest").change(function(){
    if($(this).is(":checked")) {
        $("#tbTest").css('text-decoration','line-through');
    } 
  });

  function addJobToList(){
    if($tbJob.val() != ""){
        index += 1;
        $listJobs.append("<li>"+$tbJob.val()+"<input type = 'checkbox' class = 'delete' id = 'check_"+index+"'' /><button id = 'btnDel_"+index+"' >Del</button></li>");
        $("#btnDel_"+index).click(delJob);
        $("#check_"+index).change(function(){
            if($(this).is(":checked")) {
                $(this).parent().css('text-decoration','line-through');
            } 
        });
    }
  };

  function delJob(){
    console.log($(this).parent());
    $(this).parent().remove();
  };

  function doneJob(){
    
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