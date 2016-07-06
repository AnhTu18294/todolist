$(document).ready(function(){
  
  var $btnAdd = $("#btnAdd");
  var $btnDel = $("#del");
  var $tbJob  = $("#tbJob");
  var $listJobs = $("#listJobs")
  
  $btnAdd.click(addJobToList);
  function addJobToList(){
    if($tbJob.val() != ""){
        $listJobs.append("<li>"+$tbJob.val()+"<input type = 'checkbox' /><a href = ''>Del</a></li>");
        
    }
  };
});