$(document).ready(function(){
    $('.dropdown-wrap').mouseover(function(){
     $('.log').toggle("slow");
     $('.pull-right').css("background-color","#6F6F6F");
    });
    $('.dropdown-wrap').mouseleave(function(){
        // $('.log').toggle("slow");
    });
    $('.search-div').click(function(){
        $('.select-collection').toggle("slow");  
    });
});
