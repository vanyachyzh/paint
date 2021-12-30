let canvas = $('.canvas');
let tools = $('.tools');
let line = $('.canvas .line');
let isActing = false;
let downX =0;
let downY =0;
let moveX =0;
let moveY =0;
let heightTools= $(".tools").height();
let newBox="";
let widthCanvas = $('.canvas').width();
let heightCanvas = $('.canvas').height();
let sizeX = "";
let sizeY = "";
let size = "";
let color = "";
let borderRadius="";
let sizeNumberX =40;
let sizeNumberY =40;
let shape = "";
let visibility = "";
let visible = false;

let bodyWidth = $(window).width();
let contWidth = $(".cont").width();
let width = bodyWidth/2 - contWidth/2;
$(".cont").css("left",width);
$(".tools").css("left",width);


$('.tools .sizes').on("click", ".size", function(e){
    sizeX = $(this).width();
    sizeY = $(this).height();
    borderRadius = $(this).css('border-radius');
    size ='width:'+sizeY+'px;border-radius:'+borderRadius+' ;height:'+sizeY+'px;';
    sizeNumberX =parseInt(sizeX);
    sizeNumberY =parseInt(sizeY);
    console.log(sizeNumberX,sizeNumberY)
    $(".tools .sizes .size").css("box-shadow","none")
    $(this).css("box-shadow","0 0 3px black")
})

$('.tools .colors').on("click", ".color", function(e){
    color = 'background-color:'+$(this).css('background-color')+';';
    $(".tools .main-color").css("background-color",$(this).css('background-color'));
    $(".tools .sizes .size").css("background-color",$(this).css('background-color'));
    $(".tools .shapes .shape1").css("background-color",$(this).css('background-color'));
    $(".tools .shapes .shape2").css("background-color",$(this).css('background-color'));
    $(".tools .colors .top-colors .color").css("box-shadow","none")
    $(".tools .colors .bottom-colors .color").css("box-shadow","none")
    $(this).css("box-shadow","0 0 3px black")
})

$('.tools .shapes').on("click", ".shape1", function(e){
    shape = 'border-radius:'+$(this).css('border-radius')+';';
    console.log(shape);
    $(".tools .shapes .shape1").css("box-shadow","0 0 3px black")
    $(".tools .shapes .shape2").css("box-shadow","none")
    $(".tools .sizes .size").css("border-radius","0")
})
$('.tools .shapes').on("click", ".shape2", function(e){
    shape = 'border-radius:'+$(this).css('border-radius')+';';
    console.log(shape);
    $(".tools .shapes .shape2").css("box-shadow","0 0 3px black")
    $(".tools .shapes .shape1").css("box-shadow","none")
    $(".tools .sizes .size").css("border-radius","150px")
})





canvas.mousedown(function(e){
    isActing = true;
    downX = e.pageX;
    downY = e.pageY;
    if(downX <= (widthCanvas-sizeNumberX) && downY <= (heightCanvas-sizeNumberY)){
        canvas.html("<div class='line' style='left:"+downX+"px; "+size+color+shape+" top:"+downY+"px;'></div>");
    }
    if(downX > (widthCanvas-sizeNumberX)){
        downX = widthCanvas-sizeNumberX;
        canvas.html("<div class='line' style='left:"+downX+"px;"+size+color+shape+" top:"+downY+"px;'></div>");
    }
    if(downY > (heightCanvas-sizeNumberY)){
        downY = heightCanvas-sizeNumberY;
        canvas.html("<div class='line' style='left:"+downX+"px;"+size+color+shape+" top:"+downY+"px;'></div>");
    }
})

canvas.mouseup(function(e){
    isActing = false;
})

canvas.mousemove(function(e){
    if(isActing == true){
        moveX = e.pageX;
        moveY = e.pageY;
        if(moveX <= (widthCanvas-sizeNumberX) && moveY <= (heightCanvas-sizeNumberY)){        
        newBox += "<div class='line' style='left:"+moveX+"px; "+size+color+shape+" top:"+moveY+"px;'></div>";
        canvas.html(newBox);
        }
        if(moveX > (widthCanvas-sizeNumberX)){
            moveX = widthCanvas-sizeNumberX;
            newBox += "<div class='line' style='left:"+moveX+"px; "+size+color+shape+" top:"+moveY+"px;'></div>";
            canvas.html(newBox);
        }
        if(moveY > (heightCanvas-sizeNumberY)){
            moveY = heightCanvas-sizeNumberY;
            newBox += "<div class='line' style='left:"+moveX+"px; "+size+color+shape+" top:"+moveY+"px;'></div>";
            canvas.html(newBox);
        }
        // $('.tools').css('visibility','hidden');
        // $('.open-tools').css('visibility','visible');
    }
})
// $('.open-tools').click(function(e){
//     tools.css('visibility','visible');
//     $('.open-tools').css('visibility','hidden');
// })





