var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

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
        } else  if(keypressed===32) {
            $("#32").css("background-color", "yellow");
        }else {
            $("#" + (keypressed + 32)).css("background-color", "yellow");
        }
    })
    $("body").on("keyup", function(event) {
        var keypressed = event.keyCode;
        if(event.shiftKey===true) {
        $("#" + keypressed).css("background-color", "WhiteSmoke");
        } else if(keypressed===32) {
            $("#32").css("background-color", "WhiteSmoke");
        }else {
            $("#" + (keypressed + 32)).css("background-color", "WhiteSmoke");
        }
        
    })
    var i = 0;
    $("#sentence").append(sentences[i]);
    
    $("body").keypress(function(event){
        var keypressed = event.keyCode;
        var targetchar = sentences[i].charCodeAt(0);
        
        if(keypressed===targetchar) {
            $("#feedback").append('<span class="glyphicon glyphicon-ok"></span>');
        } else{
            $("#feedback").append('<span class="glyphicon glyphicon-remove"></span>');
        }
    })




    
    })
    
    
    

   

