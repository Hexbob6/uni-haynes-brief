$(document).ready(
    
    function() {
        
        $("html").niceScroll({
            
            scrollspeed : "100",
            mousescrollstep : "60",
            cursorcolor : "#515151",
            cursorwidth : 10,
            cursorborder : "1px solid rgba(255,255,255,0.6)",
            cursoropacitymax : 0.5,
            zindex : 9999,
            touchbehavior : true,
            grabcursorenabled : false,
            
        });
        
        $(".reviews-scroller").niceScroll({
            
            scrollspeed : "100",
            mousescrollstep : "60",
            cursorcolor : "#f1f1f1",
            cursorwidth : 15,
            cursorborderradius : "8px",
            cursorborder : "0px",
            autohidemode : false,
            touchbehavior : true,
            grabcursorenabled : false,
            
        });
        
    }
    
)
