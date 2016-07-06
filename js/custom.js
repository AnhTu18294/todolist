$(document).ready(function(){
    var i = 0;
    $("#btnAdd").click(function(){
    	var job = $("#job").val();    	
    	if(job != ""){
            i = i+1;    		
    		$("#listJobs").append("<li>"+job+"<input type = 'checkbox' class = 'delete'></li>"); 
        }       
    });
    $("#listJobs").find("li").click(function(){        
        $(this).remove();
        console.log("removed")
    });  

    $("#btnDel").click(function(){
        $(".delete").each(function(){
            console.log($(this));
            if($(this).is(":checked")){
                $(this).parent().remove();
            }
        });
    });
    $("#job").keypress(function(event){
        if(event.which == 13){
            var job = $("#job").val();      
            if(job != ""){
                i = i+1;            
                $("#listJobs").append("<li id = '"+i+"'>"+job+"<input type = 'checkbox' class = 'delete'></li>"); 
            }     
        }
    });
       
});