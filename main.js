$(document).ready(function(){

    // Variables
    var addButton = $("#add");
    var taskBox = $("#task-box");
    var taskList = $("#task-list");
    
    // Add task
    addButton.click(function(){
        var newTask = taskBox.val();
        
        if (newTask ===  ''|| newTask === null || newTask === ' '){
            alert('Please write a new task');
        }else{
            console.log("new task added!");
            taskList.append("<li id='task' class='inprogress'>" + newTask + "</li>");
            taskBox.val("");
        };
    });

    // Complete Task
    taskList.on('click', 'li', function(){
        var liElement = $(this);

        if (liElement.hasClass('complete')){
            liElement.removeClass('complete');
            liElement.addClass('inprogress');
        }else{
            liElement.addClass('complete');
        }    
    })
    
    // Remove Complete
    clearButton.click(function(){
        
        var listElements = $("li");
        var completeElements = $(".complete");

        if (listElements.hasClass("complete")){
            completeElements.remove();
        }
    })
})
