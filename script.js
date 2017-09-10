

$(document).ready(function() {
    $("#keyboard-upper-container").hide();
    $("body").on("keydown", function(event) {
        if(event.shiftKey) {
        $("#keyboard-lower-container").hide();
        $("#keyboard-upper-container").show();
        }
    $("body").on("keyup", function(event) {
        if(event.shiftKey === false) {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
        
        }
    })
    })

    $("body").on("keydown", function(event) {
        var keypressed = event.keyCode;
        if(event.shiftKey===true) {
        $("#" + keypressed).css("background-color", "yellow");
        } else{
            $("#" + (keypressed + 32)).css("background-color", "yellow");
        }
    })
    $("body").on("keyup", function(event) {
        var keypressed = event.keyCode;
        if(event.shiftKey===true) {
        $("#" + keypressed).css("background-color", "WhiteSmoke");
        } else {
            $("#" + (keypressed + 32)).css("background-color", "WhiteSmoke");
        }
        
    })



    
    })
    
    
    

   

